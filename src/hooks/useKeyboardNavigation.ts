import { useEffect, useState, useCallback } from 'react';
import { useChess } from '../context/ChessContext';

interface KeyboardState {
  selectedSquare: string | null;
  focusedSquare: string | null;
}

export const useKeyboardNavigation = () => {
  const { makeMove, getPossibleMoves } = useChess();
  const [state, setState] = useState<KeyboardState>({
    selectedSquare: null,
    focusedSquare: 'e2', // Start at e2 by default
  });

  // Convert algebraic notation to coordinates
  const squareToCoords = (square: string): [number, number] => {
    const file = square.charCodeAt(0) - 'a'.charCodeAt(0);
    const rank = 8 - parseInt(square[1]);
    return [rank, file];
  };

  // Convert coordinates to algebraic notation
  const coordsToSquare = (rank: number, file: number): string | null => {
    if (rank < 0 || rank > 7 || file < 0 || file > 7) return null;
    return `${String.fromCharCode(file + 'a'.charCodeAt(0))}${8 - rank}`;
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const [rank, file] = state.focusedSquare ? squareToCoords(state.focusedSquare) : [0, 0];
    let newSquare: string | null = null;

    switch (e.key) {
      case 'ArrowUp':
        newSquare = coordsToSquare(rank - 1, file);
        break;
      case 'ArrowDown':
        newSquare = coordsToSquare(rank + 1, file);
        break;
      case 'ArrowLeft':
        newSquare = coordsToSquare(rank, file - 1);
        break;
      case 'ArrowRight':
        newSquare = coordsToSquare(rank, file + 1);
        break;
      case 'Enter':
      case ' ':
        if (state.selectedSquare) {
          const possibleMoves = getPossibleMoves(state.selectedSquare);
          if (possibleMoves.includes(state.focusedSquare!)) {
            makeMove(state.selectedSquare, state.focusedSquare!);
            setState(prev => ({ ...prev, selectedSquare: null }));
          }
        } else {
          setState(prev => ({ ...prev, selectedSquare: state.focusedSquare }));
        }
        break;
      case 'Escape':
        setState(prev => ({ ...prev, selectedSquare: null }));
        break;
    }

    if (newSquare) {
      e.preventDefault();
      setState(prev => ({ ...prev, focusedSquare: newSquare }));
      
      // Announce the new square for screen readers
      const element = document.querySelector(`[data-square="${newSquare}"]`);
      if (element) {
        (element as HTMLElement).focus();
      }
    }
  }, [state, makeMove, getPossibleMoves]);

  // Set up keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    ...state,
    isSquareSelected: (square: string) => square === state.selectedSquare,
    isSquareFocused: (square: string) => square === state.focusedSquare,
  };
}; 