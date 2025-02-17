import { Chess } from 'chess.js';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';

export declare interface BoardProps {
    position?: string | Record<string, PieceSymbol>;
    onPieceDrop?: (source: string, target: string, piece: string) => boolean;
    orientation?: 'white' | 'black';
    customSquareStyles?: Record<string, CSSProperties>;
    theme?: string;
}

export declare const ChessBoard: default_2.FC<BoardProps>;

declare interface ChessContextType {
    game: Chess;
    position: string;
    isCheck: boolean;
    isCheckmate: boolean;
    isStalemate: boolean;
    isDraw: boolean;
    isThreefoldRepetition: boolean;
    isFiftyMoveRule: boolean;
    isInsufficientMaterial: boolean;
    turn: 'w' | 'b';
    history: string[];
    makeMove: (from: string, to: string) => boolean;
    undo: () => boolean;
    reset: () => void;
    getPossibleMoves: (square: string) => string[];
}

export declare const ChessProvider: default_2.FC<ChessProviderProps>;

declare interface ChessProviderProps {
    children: default_2.ReactNode;
}

export declare interface GameState {
    isCheck: boolean;
    isCheckmate: boolean;
    isStalemate: boolean;
    turn: 'white' | 'black';
}

export declare const generateFEN: (_position: Record<string, string>) => string;

export declare const isValidMove: (_from: string, _to: string, _piece: string, _position: Record<string, string>) => boolean;

export declare interface Move {
    from: string;
    to: string;
    piece: PieceSymbol;
    captured?: PieceSymbol;
    promotion?: PieceSymbol;
    san: string;
}

export declare const Piece: default_2.FC<PieceProps>;

export declare type PieceColor = 'w' | 'b';

declare interface PieceContextType {
    currentTheme: string;
    themes: Record<string, PieceTheme>;
    loadTheme: (name: string) => Promise<void>;
    getPieceSvg: (piece: PieceSymbol) => string | null;
}

export declare interface PieceProps {
    piece: PieceSymbol;
    square: string;
    isDragging: boolean;
    _theme?: string;
}

export declare const PieceProvider: default_2.FC<PieceProviderProps>;

declare interface PieceProviderProps {
    children: default_2.ReactNode;
    defaultTheme?: string;
}

export declare type PieceSymbol = `${PieceColor}${PieceType}`;

export declare interface PieceTheme {
    name: string;
    pieces: Record<PieceSymbol, string>;
}

export declare type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';

export declare interface Square {
    file: string;
    rank: number;
    color: 'light' | 'dark';
    piece?: PieceSymbol;
}

export declare const useChess: () => ChessContextType;

export declare const useChessGame: (initialPosition?: string) => {
    position: string;
    gameState: GameState;
    makeMove: (from: string, to: string) => boolean;
};

export declare const usePieces: () => PieceContextType;

export { }
