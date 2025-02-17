export interface OpeningData {
  eco: string;
  name: string;
  moves: string[];
  fen: string;
  explanation: string[];
  variations: {
    name: string;
    moves: string[];
    explanation: string;
  }[];
}

export interface ChessPuzzle {
  id: string;
  fen: string;
  moves: string[];
  category: PuzzleCategory;
  difficulty: 1 | 2 | 3 | 4 | 5;
  rating: number;
  themes: string[];
  explanation: string;
  hint: string;
}

export type PuzzleCategory = 
  | 'mate-in-one'
  | 'mate-in-two'
  | 'mate-in-three'
  | 'fork'
  | 'pin'
  | 'skewer'
  | 'discovery'
  | 'sacrifice'
  | 'endgame';

export interface BookMove {
  move: string;
  fen: string;
  frequency: number;
  winRate: number;
  drawRate: number;
  evaluation?: number;
  nextMoves: string[];
}

export interface BookPosition {
  fen: string;
  moves: BookMove[];
  totalGames: number;
  averageElo: number;
  lastPlayed?: string;
} 