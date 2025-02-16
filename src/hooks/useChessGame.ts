import { useState } from 'react';
import { GameState } from '../types';

export const useChessGame = (initialPosition = 'start') => {
  const [position, setPosition] = useState(initialPosition);
  const [gameState, setGameState] = useState<GameState>({
    isCheck: false,
    isCheckmate: false,
    isStalemate: false,
    turn: 'white'
  });

  const makeMove = (from: string, to: string): boolean => {
    // Temporary implementation - always allows moves
    console.log(`Moving from ${from} to ${to}`);
    return true;
  };

  return {
    position,
    gameState,
    makeMove
  };
}; 