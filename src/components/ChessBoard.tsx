import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { BoardProps } from '../types';
import { Piece } from './Piece';
import { PieceSymbol } from '../types/pieces';
import { useChess } from '../context/ChessContext';

const DEFAULT_POSITION: Record<string, PieceSymbol> = {
  a8: 'br', b8: 'bn', c8: 'bb', d8: 'bq', e8: 'bk', f8: 'bb', g8: 'bn', h8: 'br',
  a7: 'bp', b7: 'bp', c7: 'bp', d7: 'bp', e7: 'bp', f7: 'bp', g7: 'bp', h7: 'bp',
  a2: 'wp', b2: 'wp', c2: 'wp', d2: 'wp', e2: 'wp', f2: 'wp', g2: 'wp', h2: 'wp',
  a1: 'wr', b1: 'wn', c1: 'wb', d1: 'wq', e1: 'wk', f1: 'wb', g1: 'wn', h1: 'wr'
};

const getNextSquare = (square: string, direction: 'up' | 'down' | 'left' | 'right'): string | null => {
  const file = square.charCodeAt(0) - 97;
  const rank = 8 - parseInt(square[1]);

  let nextFile = file;
  let nextRank = rank;

  switch (direction) {
    case 'up': nextRank--; break;
    case 'down': nextRank++; break;
    case 'left': nextFile--; break;
    case 'right': nextFile++; break;
  }

  if (nextFile < 0 || nextFile > 7 || nextRank < 0 || nextRank > 7) return null;
  return `${String.fromCharCode(97 + nextFile)}${8 - nextRank}`;
};

interface DragState {
  piece: string | null;
  from: string | null;
  isDragging: boolean;
}

export const ChessBoard: React.FC<BoardProps> = ({
  onPieceDrop,
  orientation = 'white',
  customSquareStyles = {}
}) => {
  const {
    position,
    makeMove,
    getPossibleMoves,
    turn
  } = useChess();

  const [dragState, setDragState] = useState<DragState>({
    piece: null,
    from: null,
    isDragging: false
  });
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [highlightedSquares, setHighlightedSquares] = useState<string[]>([]);
  const boardRef = useRef<HTMLDivElement>(null);
  const dragHandlersRef = useRef<{
    handleMove: ((e: MouseEvent) => void) | null;
    handleUp: ((e: MouseEvent) => void) | null;
  }>({
    handleMove: null,
    handleUp: null
  });

  // Parse FEN to get position
  const currentPosition = useMemo(() => {
    console.log('Parsing position:', position);
    const [fen] = position.split(' ');
    const rows = fen.split('/');
    const positionMap: Record<string, PieceSymbol> = {};
    
    rows.forEach((row, rowIndex) => {
      let colIndex = 0;
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (/\d/.test(char)) {
          colIndex += parseInt(char);
        } else {
          const square = `${String.fromCharCode(97 + colIndex)}${8 - rowIndex}`;
          const color = char === char.toUpperCase() ? 'w' : 'b';
          const piece = char.toLowerCase();
          positionMap[square] = `${color}${piece}` as PieceSymbol;
          colIndex++;
        }
      }
    });
    
    console.log('Parsed position map:', positionMap);
    return positionMap;
  }, [position]);

  const getSquareFromEvent = useCallback((e: React.MouseEvent | MouseEvent): string | null => {
    if (!boardRef.current) return null;
    
    const rect = boardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Ensure coordinates are within board bounds
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) return null;
    
    const file = Math.floor((x / rect.width) * 8);
    const rank = Math.floor((y / rect.height) * 8);
    const square = `${String.fromCharCode(97 + (orientation === 'white' ? file : 7 - file))}${8 - rank}`;
    
    return square;
  }, [orientation]);

  // Cleanup function
  const cleanupDragEvents = useCallback(() => {
    if (dragHandlersRef.current.handleMove) {
      window.removeEventListener('mousemove', dragHandlersRef.current.handleMove);
    }
    if (dragHandlersRef.current.handleUp) {
      window.removeEventListener('mouseup', dragHandlersRef.current.handleUp);
    }
    dragHandlersRef.current.handleMove = null;
    dragHandlersRef.current.handleUp = null;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => cleanupDragEvents();
  }, [cleanupDragEvents]);

  const handleDragStart = useCallback((e: React.MouseEvent, square: string) => {
    const piece = currentPosition[square];
    if (!piece || (turn === 'w' && piece.startsWith('b')) || (turn === 'b' && piece.startsWith('w'))) {
      return;
    }
    
    e.preventDefault();
    setDragState({
      piece,
      from: square,
      isDragging: true
    });

    // Show possible moves
    const moves = getPossibleMoves(square);
    setHighlightedSquares(moves);

    // Create new handlers for this drag operation
    const handleMove = (e: MouseEvent) => {
      e.preventDefault();
      if (!boardRef.current) return;

      // Remove previous drop target highlights and dragging-over class
      document.querySelectorAll('.drop-target, .dragging-over').forEach(el => {
        el.classList.remove('drop-target', 'dragging-over');
      });

      // Update the hover square for drop preview
      const square = getSquareFromEvent(e);
      if (square && moves.includes(square)) {
        const element = document.querySelector(`[data-square="${square}"]`);
        if (element) {
          element.classList.add('drop-target', 'dragging-over');
        }
      }
    };

    const handleUp = (e: MouseEvent) => {
      e.preventDefault();
      
      // Remove all drop target highlights
      document.querySelectorAll('.drop-target').forEach(el => {
        el.classList.remove('drop-target');
      });

      const toSquare = getSquareFromEvent(e);
      if (toSquare && toSquare !== square && moves.includes(toSquare) && onPieceDrop) {
        onPieceDrop(square, toSquare, piece);
      }
      
      setDragState({ piece: null, from: null, isDragging: false });
      setHighlightedSquares([]);
      cleanupDragEvents();
    };

    // Store the handlers
    dragHandlersRef.current.handleMove = handleMove;
    dragHandlersRef.current.handleUp = handleUp;

    // Add event listeners
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  }, [currentPosition, getPossibleMoves, turn, getSquareFromEvent, onPieceDrop, cleanupDragEvents]);

  const handleSquareSelect = useCallback((e: React.MouseEvent, square: string) => {
    e.stopPropagation();
    
    if (dragState.isDragging) return;
    
    if (selectedSquare) {
      if (square === selectedSquare) {
        // Deselect if clicking the same square
        setSelectedSquare(null);
        setHighlightedSquares([]);
        return;
      }

      // Check if the move is in the list of possible moves
      const possibleMoves = getPossibleMoves(selectedSquare);
      if (possibleMoves.includes(square)) {
        const success = makeMove(selectedSquare, square);
        if (success && onPieceDrop) {
          onPieceDrop(selectedSquare, square, currentPosition[selectedSquare]);
        }
      }
      setSelectedSquare(null);
      setHighlightedSquares([]);
    } else if (currentPosition[square]) {
      const piece = currentPosition[square];
      if ((turn === 'w' && piece.startsWith('w')) || (turn === 'b' && piece.startsWith('b'))) {
        setSelectedSquare(square);
        setHighlightedSquares(getPossibleMoves(square));
      }
    } else {
      setSelectedSquare(null);
      setHighlightedSquares([]);
    }
  }, [selectedSquare, makeMove, onPieceDrop, currentPosition, getPossibleMoves, turn, dragState.isDragging]);

  const handleBoardClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedSquare(null);
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, square: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const syntheticEvent = {
        stopPropagation: () => {},
        target: e.target,
        currentTarget: e.currentTarget
      } as React.MouseEvent;
      handleSquareSelect(syntheticEvent, square);
    } else if (e.key === 'Escape') {
      setSelectedSquare(null);
    } else {
      const direction = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right'
      }[e.key] as 'up' | 'down' | 'left' | 'right' | undefined;

      if (direction) {
        e.preventDefault();
        const nextSquare = getNextSquare(square, direction);
        if (nextSquare) {
          const nextElement = document.querySelector(`[data-square="${nextSquare}"]`);
          if (nextElement instanceof HTMLElement) {
            nextElement.focus();
          }
        }
      }
    }
  }, [handleSquareSelect]);

  return (
    <div 
      ref={boardRef}
      className="chess-board"
      role="grid"
      aria-label="Chess board"
      onClick={handleBoardClick}
    >
      {Array.from({ length: 64 }, (_, i) => {
        const row = Math.floor(i / 8);
        const col = orientation === 'white' ? i % 8 : 7 - (i % 8);
        const isLight = (row + col) % 2 === 0;
        const square = `${String.fromCharCode(97 + col)}${8 - row}`;
        const piece = currentPosition[square];
        const isHighlighted = highlightedSquares.includes(square);
        
        return (
          <div
            key={square}
            className={`square ${isLight ? 'light' : 'dark'} ${
              selectedSquare === square ? 'selected' : ''
            } ${isHighlighted ? 'highlighted' : ''}`}
            data-square={square}
            style={customSquareStyles[square]}
            onMouseDown={(e) => piece && handleDragStart(e, square)}
            onClick={(e) => handleSquareSelect(e, square)}
            role="gridcell"
            aria-label={`${isLight ? 'light' : 'dark'} square ${square}${
              piece ? ` with ${piece[0] === 'w' ? 'white' : 'black'} piece` : ''
            }`}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, square)}
          >
            <div className="square-content">
              {piece && (
                <Piece
                  piece={piece}
                  square={square}
                  isDragging={dragState.from === square}
                />
              )}
            </div>
          </div>
        );
      })}

      <style>{`
        .chess-board {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          aspect-ratio: 1;
          background: #312E2B;
          position: relative;
          user-select: none;
          width: 100%;
          border: 4px solid #312E2B;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          touch-action: none;
        }

        .square {
          position: relative;
          width: 100%;
          padding-top: 100%;
          background-color: #EEEED2;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }

        .square.dark {
          background-color: #769656;
        }

        .square-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: inherit;
        }

        .square.selected {
          box-shadow: inset 0 0 0 3px rgba(255, 255, 0, 0.5);
        }

        .square.drop-target {
          box-shadow: inset 0 0 0 3px rgba(0, 255, 0, 0.5);
        }

        .square.drop-target.selected {
          box-shadow: inset 0 0 0 3px rgba(255, 255, 0, 0.5),
                     inset 0 0 0 6px rgba(0, 255, 0, 0.5);
        }

        .square:focus {
          outline: none;
          box-shadow: inset 0 0 0 3px rgba(0, 128, 255, 0.5);
        }

        .square.selected:focus {
          box-shadow: inset 0 0 0 3px rgba(255, 255, 0, 0.5),
                      0 0 0 3px rgba(0, 128, 255, 0.5);
        }

        .square::before {
          content: attr(data-square);
          position: absolute;
          bottom: 2px;
          left: 2px;
          font-size: 8px;
          opacity: 0.5;
          color: ${orientation === 'white' ? '#769656' : '#EEEED2'};
          pointer-events: none;
          z-index: 1;
        }

        .square:hover .square-content::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }

        @media (hover: none) {
          .square:hover .square-content::after {
            display: none;
          }
        }

        .square.highlighted::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 255, 0, 0.2);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}; 