import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Chess, type Move, type Square } from 'chess.js';

interface ChessContextType {
  game: Chess;
  position: string;
  isCheck: boolean;
  isCheckmate: boolean;
  isStalemate: boolean;
  isDraw: boolean;
  isThreefoldRepetition: boolean;
  isFiftyMoveRule: boolean;
  isInsufficientMaterial: boolean;
  turn: 'w' | 'b';
  history: string[];
  makeMove: (from: string, to: string) => boolean;
  undo: () => boolean;
  reset: () => void;
  getPossibleMoves: (square: string) => string[];
}

const ChessContext = createContext<ChessContextType | null>(null);

export const useChess = () => {
  const context = useContext(ChessContext);
  if (!context) {
    throw new Error('useChess must be used within a ChessProvider');
  }
  return context;
};

interface ChessProviderProps {
  children: React.ReactNode;
}

export const ChessProvider: React.FC<ChessProviderProps> = ({ children }) => {
  const [game] = useState(() => new Chess());
  const [position, setPosition] = useState(game.fen());
  const [history, setHistory] = useState<string[]>([]);
  const [positionHistory, setPositionHistory] = useState<Map<string, number>>(new Map());

  const updateGameState = useCallback(() => {
    const newPosition = game.fen();
    setPosition(newPosition);
    setHistory(game.history({ verbose: true }).map((move: Move) => move.san));
    
    // Update position history for threefold repetition
    const positionKey = newPosition.split(' ').slice(0, 4).join(' ');
    setPositionHistory(prev => {
      const newMap = new Map(prev);
      newMap.set(positionKey, (newMap.get(positionKey) || 0) + 1);
      return newMap;
    });
  }, [game]);

  const isThreefoldRepetition = useCallback(() => {
    const currentPosition = game.fen().split(' ').slice(0, 4).join(' ');
    return (positionHistory.get(currentPosition) || 0) >= 3;
  }, [game, positionHistory]);

  const isFiftyMoveRule = useCallback(() => {
    const [, , , , halfMoves] = game.fen().split(' ');
    return parseInt(halfMoves) >= 100;
  }, [game]);

  const isInsufficientMaterial = useCallback(() => {
    const pieces = game.board().flat().filter(piece => piece !== null);
    if (pieces.length <= 3) {
      // King vs. King
      if (pieces.length === 2) return true;
      
      // King and Bishop vs. King or King and Knight vs. King
      if (pieces.length === 3) {
        const nonKingPiece = pieces.find(piece => piece?.type !== 'k');
        return nonKingPiece?.type === 'b' || nonKingPiece?.type === 'n';
      }
    }
    return false;
  }, [game]);

  const getPossibleMoves = useCallback((square: string): string[] => {
    try {
      // Get moves in standard format first
      const moves = game.moves({ 
        square: square as Square,
        verbose: false 
      });
      
      // Convert to destination squares
      return moves.map(move => {
        // Handle special notations like "e8=Q" or "O-O"
        if (typeof move === 'string') {
          if (move === 'O-O' || move === 'O-O-O') {
            // Handle castling
            const rank = game.turn() === 'w' ? '1' : '8';
            return move === 'O-O' ? `g${rank}` : `c${rank}`;
          }
          // Extract destination square from algebraic notation
          const match = move.match(/[a-h][1-8]/);
          return match ? match[0] : '';
        }
        return '';
      }).filter(Boolean);
    } catch (e) {
      console.error('Error getting possible moves:', e);
      return [];
    }
  }, [game]);

  const makeMove = useCallback((from: string, to: string): boolean => {
    try {
      // Get all legal moves from this square
      const moves = game.moves({ 
        square: from as Square,
        verbose: true 
      });

      // Find the matching move
      const move = moves.find(m => m.to === to);
      
      if (move) {
        // Use the full move object from chess.js
        const result = game.move(move);
        if (result) {
          updateGameState();
          return true;
        }
      }
      return false;
    } catch (e) {
      console.error('Invalid move:', e);
      return false;
    }
  }, [game, updateGameState]);

  const undo = useCallback(() => {
    const success = game.undo() !== null;
    if (success) {
      updateGameState();
    }
    return success;
  }, [game, updateGameState]);

  const reset = useCallback(() => {
    game.reset();
    setPositionHistory(new Map());
    updateGameState();
  }, [game, updateGameState]);

  useEffect(() => {
    updateGameState();
  }, [updateGameState]);

  return (
    <ChessContext.Provider value={{
      game,
      position,
      isCheck: game.isCheck(),
      isCheckmate: game.isCheckmate(),
      isStalemate: game.isStalemate(),
      isDraw: game.isDraw(),
      isThreefoldRepetition: isThreefoldRepetition(),
      isFiftyMoveRule: isFiftyMoveRule(),
      isInsufficientMaterial: isInsufficientMaterial(),
      turn: game.turn(),
      history,
      makeMove,
      undo,
      reset,
      getPossibleMoves
    }}>
      {children}
    </ChessContext.Provider>
  );
}; 