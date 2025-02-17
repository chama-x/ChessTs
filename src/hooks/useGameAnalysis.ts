import { useState, useEffect } from 'react';
import { useChess } from '../context/ChessContext';
import { Move } from '../types';

interface MoveAnalysis {
  move: string;
  annotation: string;
  timeSpent?: number;
  isCheck: boolean;
  isMistake: boolean;
}

interface GameStats {
  captures: number;
  checks: number;
  mistakes: number;
  averageTimePerMove: number;
}

export const useGameAnalysis = () => {
  const { history, isCheck, position } = useChess();
  const [moveAnalysis, setMoveAnalysis] = useState<MoveAnalysis[]>([]);
  const [gameStats, setGameStats] = useState<GameStats>({
    captures: 0,
    checks: 0,
    mistakes: 0,
    averageTimePerMove: 0,
  });

  // Simple position evaluation based on material
  const evaluatePosition = (fen: string): number => {
    const pieceValues = {
      p: 1, n: 3, b: 3, r: 5, q: 9, k: 0,
    };
    
    let score = 0;
    const position = fen.split(' ')[0];
    
    for (const char of position) {
      if (char in pieceValues) {
        score -= pieceValues[char as keyof typeof pieceValues];
      } else if (char.toLowerCase() in pieceValues) {
        score += pieceValues[char.toLowerCase() as keyof typeof pieceValues];
      }
    }
    
    return score;
  };

  // Analyze moves and update statistics
  useEffect(() => {
    const analysis = history.map((move, index) => {
      const isCapture = move.includes('x');
      const moveCheck = move.includes('+');
      const evaluation = evaluatePosition(position);
      
      // Simple mistake detection (if evaluation drops significantly)
      const isMistake = index > 0 && Math.abs(evaluation) > 2;

      return {
        move,
        annotation: isCapture ? 'Capture' : moveCheck ? 'Check' : '',
        isCheck: moveCheck,
        isMistake,
      };
    });

    setMoveAnalysis(analysis);

    // Update game statistics
    setGameStats({
      captures: analysis.filter(m => m.move.includes('x')).length,
      checks: analysis.filter(m => m.isCheck).length,
      mistakes: analysis.filter(m => m.isMistake).length,
      averageTimePerMove: 0, // To be implemented with time tracking
    });
  }, [history, position]);

  return {
    moveAnalysis,
    gameStats,
    currentEvaluation: evaluatePosition(position),
  };
}; 