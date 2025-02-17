import puzzlesData from './datasets/puzzles.json';
import { ChessPuzzle, PuzzleCategory } from '../types/chess';

// Export the raw data for direct access
export const PUZZLE_DATABASE: ChessPuzzle[] = puzzlesData.puzzles.map(puzzle => ({
  ...puzzle,
  category: puzzle.category as PuzzleCategory,
  difficulty: puzzle.difficulty as 1 | 2 | 3 | 4 | 5
}));

// Helper function to get puzzles by category
export function getPuzzlesByCategory(category: PuzzleCategory): ChessPuzzle[] {
  return PUZZLE_DATABASE.filter(puzzle => puzzle.category === category);
}

// Helper function to get puzzles by rating range
export function getPuzzlesByRating(minRating: number, maxRating: number): ChessPuzzle[] {
  return PUZZLE_DATABASE.filter(puzzle => 
    puzzle.rating >= minRating && puzzle.rating <= maxRating
  );
}

// Helper function to get random puzzle
export function getRandomPuzzle(): ChessPuzzle {
  const index = Math.floor(Math.random() * PUZZLE_DATABASE.length);
  return PUZZLE_DATABASE[index];
}

// Efficient puzzle storage with difficulty-based sections
export const PUZZLE_DATABASE_BY_CATEGORY: Record<PuzzleCategory, ChessPuzzle[]> = {
  'mate-in-one': [],
  'mate-in-two': [],
  'mate-in-three': [],
  'fork': [],
  'pin': [],
  'skewer': [],
  'discovery': [],
  'sacrifice': [],
  'endgame': []
};

// Efficient lookup structures
export const PUZZLE_BY_RATING = new Map<number, ChessPuzzle[]>();
export const PUZZLE_BY_DIFFICULTY = new Map<number, ChessPuzzle[]>();

// Initialize lookup structures
PUZZLE_DATABASE.forEach(puzzle => {
  // Group by category
  PUZZLE_DATABASE_BY_CATEGORY[puzzle.category].push(puzzle);

  // Group by rating range (every 200 points)
  const ratingGroup = Math.floor(puzzle.rating / 200) * 200;
  if (!PUZZLE_BY_RATING.has(ratingGroup)) {
    PUZZLE_BY_RATING.set(ratingGroup, []);
  }
  PUZZLE_BY_RATING.get(ratingGroup)?.push(puzzle);

  // Group by difficulty
  if (!PUZZLE_BY_DIFFICULTY.has(puzzle.difficulty)) {
    PUZZLE_BY_DIFFICULTY.set(puzzle.difficulty, []);
  }
  PUZZLE_BY_DIFFICULTY.get(puzzle.difficulty)?.push(puzzle);
});

// Helper functions for puzzle retrieval
export const getPuzzlesByDifficulty = (difficulty: number): ChessPuzzle[] => {
  return PUZZLE_BY_DIFFICULTY.get(difficulty) || [];
};

// Get appropriate puzzle for user
export const getNextPuzzle = (
  userRating: number,
  completedPuzzles: Set<string>
): ChessPuzzle | undefined => {
  const ratingRange = 200;
  const ratingGroup = Math.floor(userRating / ratingRange) * ratingRange;
  
  // Get puzzles within rating range
  const puzzles = PUZZLE_BY_RATING.get(ratingGroup) || [];
  
  // Filter out completed puzzles
  return puzzles.find(puzzle => !completedPuzzles.has(puzzle.id));
}; 