import { CSSProperties } from 'react';
import { PieceSymbol } from './pieces';

export interface BoardProps {
  position?: string | Record<string, PieceSymbol>;
  onPieceDrop?: (source: string, target: string, piece: string) => boolean;
  orientation?: 'white' | 'black';
  customSquareStyles?: Record<string, CSSProperties>;
  theme?: string;
}

export interface PieceProps {
  piece: PieceSymbol;
  square: string;
  isDragging: boolean;
  _theme?: string;
}

export interface GameState {
  isCheck: boolean;
  isCheckmate: boolean;
  isStalemate: boolean;
  turn: 'white' | 'black';
}

export interface Square {
  file: string;
  rank: number;
  color: 'light' | 'dark';
  piece?: PieceSymbol;
}

export interface Move {
  from: string;
  to: string;
  piece: PieceSymbol;
  captured?: PieceSymbol;
  promotion?: PieceSymbol;
  san: string; // Standard Algebraic Notation
} 