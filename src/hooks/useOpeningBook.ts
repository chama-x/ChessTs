import { useState, useEffect } from 'react';
import { useChess } from '../context/ChessContext';

interface OpeningInfo {
  name: string;
  moves: string[];
  variations: string[];
}

const BASIC_OPENINGS: Record<string, OpeningInfo> = {
  'e2e4 e7e5': {
    name: 'Open Game',
    moves: ['Nf3', 'Nc6', 'Bb5'],
    variations: ['Ruy Lopez', "King's Pawn Game"]
  },
  'e2e4 c7c5': {
    name: 'Sicilian Defense',
    moves: ['Nf3', 'Nc6', 'Bb5'],
    variations: ['Closed Sicilian', 'Open Sicilian']
  },
  // Add more openings as needed
};

export const useOpeningBook = () => {
  const { position, history } = useChess();
  const [currentOpening, setCurrentOpening] = useState<OpeningInfo | null>(null);
  const [suggestedMoves, setSuggestedMoves] = useState<string[]>([]);

  useEffect(() => {
    // Convert moves to a string key
    const moveKey = history.slice(0, 2).join(' ');
    const opening = BASIC_OPENINGS[moveKey];

    if (opening) {
      setCurrentOpening(opening);
      setSuggestedMoves(opening.moves);
    } else {
      setCurrentOpening(null);
      setSuggestedMoves([]);
    }
  }, [history]);

  return {
    currentOpening,
    suggestedMoves,
  };
}; 