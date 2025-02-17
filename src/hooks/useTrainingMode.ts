import { useState, useEffect, useCallback } from 'react';
import { useChess } from '../context/ChessContext';

type GameMode = 'practice' | 'puzzle' | 'opening' | 'endgame';

interface TrainingPosition {
  fen: string;
  correctMoves: string[];
  hint: string;
  explanation: string;
}

interface OpeningLesson {
  name: string;
  moves: string[];
  explanation: string[];
  variations: string[];
}

// Sample training positions
const TRAINING_POSITIONS: Record<GameMode, TrainingPosition[]> = {
  practice: [
    {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      correctMoves: ['e2e4', 'd2d4'],
      hint: 'Control the center',
      explanation: 'Opening principles: control the center with pawns'
    }
  ],
  puzzle: [
    {
      fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1',
      correctMoves: ['f3e5'],
      hint: 'Look for tactical opportunities',
      explanation: 'Fork opportunity: Knight can attack multiple pieces'
    }
  ],
  opening: [
    {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      correctMoves: ['e2e4', 'e7e5'],
      hint: 'Classic opening',
      explanation: 'The Ruy Lopez opening begins'
    }
  ],
  endgame: [
    {
      fen: '4k3/4P3/4K3/8/8/8/8/8 w - - 0 1',
      correctMoves: ['e6f6'],
      hint: 'Control opposition',
      explanation: 'Key squares principle in pawn endgames'
    }
  ]
};

const OPENING_LESSONS: OpeningLesson[] = [
  {
    name: "Ruy Lopez",
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
    explanation: [
      'Control the center with e4',
      'Black mirrors with e5',
      'Develop knight to attack e5',
      'Black defends with knight',
      'Pin the knight with bishop'
    ],
    variations: ['Berlin Defense', 'Morphy Defense']
  }
];

export const useTrainingMode = () => {
  const { position, makeMove, reset } = useChess();
  const [mode, setMode] = useState<GameMode>('practice');
  const [currentPosition, setCurrentPosition] = useState<TrainingPosition | null>(null);
  const [currentLesson, setCurrentLesson] = useState<OpeningLesson | null>(null);
  const [progress, setProgress] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Initialize training mode
  const startTraining = useCallback((newMode: GameMode) => {
    setMode(newMode);
    reset();
    
    if (newMode === 'opening') {
      setCurrentLesson(OPENING_LESSONS[0]);
      setCurrentPosition(null);
    } else {
      setCurrentPosition(TRAINING_POSITIONS[newMode][0]);
      setCurrentLesson(null);
    }
    
    setProgress(0);
    setFeedback('');
  }, [reset]);

  // Handle move in training mode
  const handleTrainingMove = useCallback((from: string, to: string) => {
    const move = `${from}${to}`;
    
    if (!currentPosition) return false;

    if (currentPosition.correctMoves.includes(move)) {
      setFeedback('Correct! ' + currentPosition.explanation);
      setProgress(prev => prev + 1);
      return true;
    } else {
      setFeedback('Try again. ' + currentPosition.hint);
      return false;
    }
  }, [currentPosition]);

  // Get current training state
  const getTrainingState = useCallback(() => {
    switch (mode) {
      case 'practice':
        return {
          title: 'Practice Mode',
          description: 'Learn basic chess principles',
          progress: `${progress}/10`
        };
      case 'puzzle':
        return {
          title: 'Puzzle Mode',
          description: 'Solve tactical positions',
          progress: `${progress}/5`
        };
      case 'opening':
        return {
          title: currentLesson?.name || 'Opening Trainer',
          description: currentLesson?.explanation[progress] || '',
          progress: `${progress}/${currentLesson?.moves.length || 0}`
        };
      case 'endgame':
        return {
          title: 'Endgame Training',
          description: 'Master essential endgame techniques',
          progress: `${progress}/5`
        };
    }
  }, [mode, progress, currentLesson]);

  return {
    mode,
    startTraining,
    handleTrainingMove,
    currentPosition,
    currentLesson,
    feedback,
    progress,
    getTrainingState,
  };
}; 