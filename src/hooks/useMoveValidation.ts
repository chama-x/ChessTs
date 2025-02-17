import { useState, useEffect, useCallback } from 'react';
import { useChess } from '../context/ChessContext';

interface TacticalPattern {
  name: string;
  description: string;
  condition: (moves: string[], position: string) => boolean;
}

interface MoveHint {
  from: string;
  to: string;
  type: 'capture' | 'check' | 'development' | 'center-control';
  explanation: string;
}

const TACTICAL_PATTERNS: TacticalPattern[] = [
  {
    name: 'Fork Opportunity',
    description: 'A piece attacks two or more pieces simultaneously',
    condition: (moves, position) => {
      // Simple check for knight moves that could attack multiple pieces
      return moves.some(move => move.includes('N') && move.includes('+'));
    }
  },
  {
    name: 'Pin',
    description: 'A piece is prevented from moving because it would expose a more valuable piece to capture',
    condition: (moves, position) => {
      // Simple check for bishop or rook moves that could create pins
      return moves.some(move => 
        (move.includes('B') || move.includes('R')) && 
        move.includes('+')
      );
    }
  }
];

export const useMoveValidation = () => {
  const { position, getPossibleMoves, history, turn } = useChess();
  const [hints, setHints] = useState<MoveHint[]>([]);
  const [activePatterns, setActivePatterns] = useState<string[]>([]);

  const analyzeTacticalPatterns = useCallback(() => {
    const patterns = TACTICAL_PATTERNS.filter(pattern =>
      pattern.condition(history, position)
    );
    setActivePatterns(patterns.map(p => p.name));
  }, [history, position]);

  const generateHints = useCallback(() => {
    const newHints: MoveHint[] = [];
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

    // Check each square for pieces
    files.forEach(file => {
      ranks.forEach(rank => {
        const square = `${file}${rank}`;
        const moves = getPossibleMoves(square);

        moves.forEach(to => {
          let type: MoveHint['type'] = 'development';
          let explanation = 'Develops piece to a better square';

          // Determine move type and explanation
          if (to.match(/[e4|e5|d4|d5]/)) {
            type = 'center-control';
            explanation = 'Controls central squares';
          }

          if (history.length < 10 && square.match(/[b1|g1|b8|g8]/)) {
            type = 'development';
            explanation = 'Develops knight to active position';
          }

          newHints.push({
            from: square,
            to,
            type,
            explanation
          });
        });
      });
    });

    setHints(newHints);
  }, [getPossibleMoves, history.length]);

  // Update hints when position changes
  useEffect(() => {
    generateHints();
    analyzeTacticalPatterns();
  }, [position, generateHints, analyzeTacticalPatterns]);

  const getSquareHints = useCallback((square: string) => {
    return hints.filter(hint => hint.from === square);
  }, [hints]);

  const getMoveExplanation = useCallback((from: string, to: string) => {
    const hint = hints.find(h => h.from === from && h.to === to);
    return hint?.explanation || 'Standard move';
  }, [hints]);

  return {
    hints,
    activePatterns,
    getSquareHints,
    getMoveExplanation,
  };
}; 