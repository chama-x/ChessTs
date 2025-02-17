import { useState, useEffect, useCallback } from 'react';
import { useChess } from '../context/ChessContext';
import { getOpeningByFEN } from '../data/openings';
import { getNextPuzzle } from '../data/puzzles';
import { getBookPosition, getBestBookMove } from '../data/bookMoves';
import { loadOpenings, loadPuzzles, loadBookMoves, preloadCommonData } from '../utils/dataLoader';
import type { ChessPuzzle, BookPosition, OpeningData } from '../types/chess';

interface TrainingState {
  mode: 'opening' | 'puzzle' | 'book' | 'practice';
  currentOpening?: OpeningData;
  currentPuzzle?: ChessPuzzle;
  currentBookPosition?: BookPosition;
  progress: number;
  feedback: string;
  loading: boolean;
  error?: string;
}

interface TrainingStats {
  puzzlesSolved: number;
  openingsLearned: number;
  averageAccuracy: number;
  timeSpent: number;
}

export const useChessTraining = (userRating: number = 1500) => {
  const { position, makeMove, reset } = useChess();
  const [state, setState] = useState<TrainingState>({
    mode: 'practice',
    progress: 0,
    feedback: '',
    loading: false
  });
  const [stats, setStats] = useState<TrainingStats>({
    puzzlesSolved: 0,
    openingsLearned: 0,
    averageAccuracy: 0,
    timeSpent: 0
  });
  const [completedPuzzles] = useState<Set<string>>(new Set());

  // Preload common data on mount
  useEffect(() => {
    preloadCommonData().catch(console.error);
  }, []);

  // Load opening data
  const loadOpeningTraining = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const openings = await loadOpenings(['A00', 'E99']);
      if (openings.length > 0) {
        setState(prev => ({
          ...prev,
          mode: 'opening',
          currentOpening: openings[0],
          loading: false
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load opening training'
      }));
    }
  }, []);

  // Load puzzle data
  const loadPuzzleTraining = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const puzzles = await loadPuzzles(userRating, 1);
      const nextPuzzle = getNextPuzzle(userRating, completedPuzzles);
      
      if (nextPuzzle) {
        setState(prev => ({
          ...prev,
          mode: 'puzzle',
          currentPuzzle: nextPuzzle,
          loading: false
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load puzzle training'
      }));
    }
  }, [userRating, completedPuzzles]);

  // Load book moves
  const loadBookTraining = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const bookPosition = await loadBookMoves(position, 3);
      if (bookPosition) {
        setState(prev => ({
          ...prev,
          mode: 'book',
          currentBookPosition: bookPosition,
          loading: false
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load book moves'
      }));
    }
  }, [position]);

  // Handle move in training mode
  const handleTrainingMove = useCallback((from: string, to: string): boolean => {
    const move = `${from}${to}`;
    
    switch (state.mode) {
      case 'puzzle':
        if (state.currentPuzzle?.moves[state.progress] === move) {
          setState(prev => ({
            ...prev,
            progress: prev.progress + 1,
            feedback: 'Correct move!'
          }));
          setStats(prev => ({
            ...prev,
            puzzlesSolved: prev.puzzlesSolved + 1
          }));
          return true;
        }
        setState(prev => ({
          ...prev,
          feedback: 'Try again. ' + (state.currentPuzzle?.hint || '')
        }));
        return false;

      case 'opening':
        if (state.currentOpening?.moves[state.progress] === move) {
          setState(prev => ({
            ...prev,
            progress: prev.progress + 1,
            feedback: 'Correct opening move!'
          }));
          return true;
        }
        setState(prev => ({
          ...prev,
          feedback: 'This move deviates from the opening.'
        }));
        return true; // Allow the move but provide feedback

      case 'book':
        const bestMove = getBestBookMove(position);
        if (bestMove?.move === move) {
          setState(prev => ({
            ...prev,
            feedback: 'Excellent book move!'
          }));
        } else {
          setState(prev => ({
            ...prev,
            feedback: 'This move is out of book theory.'
          }));
        }
        return true;

      default:
        return makeMove(from, to);
    }
  }, [state, position, makeMove]);

  // Start specific training mode
  const startTraining = useCallback(async (mode: TrainingState['mode']) => {
    reset();
    setState(prev => ({ ...prev, mode, progress: 0, feedback: '' }));

    switch (mode) {
      case 'opening':
        await loadOpeningTraining();
        break;
      case 'puzzle':
        await loadPuzzleTraining();
        break;
      case 'book':
        await loadBookTraining();
        break;
      case 'practice':
        // No special loading needed for practice mode
        break;
    }
  }, [reset, loadOpeningTraining, loadPuzzleTraining, loadBookTraining]);

  return {
    ...state,
    stats,
    handleTrainingMove,
    startTraining,
  };
}; 