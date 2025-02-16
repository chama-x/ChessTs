// Components
export { ChessBoard } from './components/ChessBoard';
export { Piece } from './components/Piece';
export { PieceProvider, usePieces } from './components/PieceProvider';

// Context
export { ChessProvider, useChess } from './context/ChessContext';

// Hooks
export { useChessGame } from './hooks/useChessGame';

// Types
export type { 
  BoardProps, 
  PieceProps, 
  GameState, 
  Square, 
  Move 
} from './types';
export type { 
  PieceType, 
  PieceColor, 
  PieceSymbol, 
  PieceTheme 
} from './types/pieces';

// Utils
export { isValidMove, generateFEN } from './utils/chess'; 