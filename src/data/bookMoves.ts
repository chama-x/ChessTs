import bookMovesData from './datasets/bookMoves.json';
import { BookMove, BookPosition } from '../types/chess';

// Efficient Trie-like structure for move sequences
class MoveTree {
  private nodes: Map<string, BookPosition>;
  private moveSequences: Map<string, string[]>;

  constructor() {
    this.nodes = new Map();
    this.moveSequences = new Map();
  }

  addPosition(position: BookPosition) {
    this.nodes.set(position.fen, position);
  }

  addMoveSequence(fen: string, moves: string[]) {
    this.moveSequences.set(fen, moves);
  }

  getPosition(fen: string): BookPosition | undefined {
    return this.nodes.get(fen);
  }

  getMoveSequence(fen: string): string[] | undefined {
    return this.moveSequences.get(fen);
  }
}

// Initialize move tree
export const moveTree = new MoveTree();

// Populate move tree with book positions
bookMovesData.positions.forEach(position => {
  moveTree.addPosition(position);
  position.moves.forEach(move => {
    moveTree.addMoveSequence(move.fen, move.nextMoves);
  });
});

// Helper functions for book moves
export const getBookPosition = (fen: string): BookPosition | undefined => {
  return moveTree.getPosition(fen);
};

export const getNextBookMoves = (fen: string): string[] | undefined => {
  return moveTree.getMoveSequence(fen);
};

// Get best book move based on criteria
export const getBestBookMove = (
  fen: string,
  criteria: 'frequency' | 'winRate' | 'evaluation' = 'winRate'
): BookMove | undefined => {
  const position = moveTree.getPosition(fen);
  if (!position?.moves.length) return undefined;

  return position.moves.reduce((best: BookMove | undefined, current: BookMove) => {
    if (!best) return current;
    if (criteria === 'evaluation' && best.evaluation === undefined) return current;
    if (current[criteria] === undefined) return best;
    return (current[criteria] ?? 0) > (best[criteria] ?? 0) ? current : best;
  }, undefined);
};

// Get move statistics
export const getMoveStatistics = (fen: string, move: string): BookMove | undefined => {
  const position = moveTree.getPosition(fen);
  return position?.moves.find((m: BookMove) => m.move === move);
};

// Export the raw data for direct access if needed
export const BOOK_POSITIONS = bookMovesData.positions;

export function getBestMove(position: BookPosition): BookMove | undefined {
  return position.moves.reduce((best: BookMove | undefined, current: BookMove) => {
    if (!best) return current;
    return current.frequency > best.frequency ? current : best;
  }, undefined);
}

export function getMoveByName(position: BookPosition, move: string): BookMove | undefined {
  return position?.moves.find((m: BookMove) => m.move === move);
} 