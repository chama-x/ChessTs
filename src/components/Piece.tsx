import React, { useRef, useEffect, useCallback, useState, memo } from 'react';
import { createPortal } from 'react-dom';
import { PieceProps } from '../types';
import { PieceSymbol, PIECE_NAMES } from '../types/pieces';
import { usePieces } from './PieceProvider';

const Piece: React.FC<PieceProps> = memo(({
  piece,
  square,
  isDragging,
  theme = 'default'
}) => {
  const { getPieceSvg } = usePieces();
  const pieceContent = getPieceSvg(piece);
  const pieceRef = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  const initialPosition = useRef<{ x: number; y: number, rect: DOMRect } | null>(null);
  
  // Get piece name for accessibility
  const pieceName = PIECE_NAMES[piece[1] as keyof typeof PIECE_NAMES];
  const pieceColor = piece[0] === 'w' ? 'white' : 'black';
  const ariaLabel = `${pieceColor} ${pieceName} on ${square}`;

  const updatePiecePosition = useCallback((e: MouseEvent) => {
    if (!isDragging || !initialPosition.current) return;

    const { x: initialX, y: initialY, rect } = initialPosition.current;
    
    // Calculate the offset from the initial click position, accounting for scroll
    const offsetX = e.pageX - initialX;
    const offsetY = e.pageY - initialY;
    
    setDragPosition({
      x: rect.left + window.scrollX + offsetX,
      y: rect.top + window.scrollY + offsetY
    });
  }, [isDragging]);

  useEffect(() => {
    if (isDragging && pieceRef.current) {
      const rect = pieceRef.current.getBoundingClientRect();
      initialPosition.current = {
        x: window.scrollX + rect.left,
        y: window.scrollY + rect.top,
        rect: rect
      };

      // Set initial position at the current piece location
      setDragPosition({ 
        x: window.scrollX + rect.left, 
        y: window.scrollY + rect.top 
      });

      // Update the initial mouse position
      const updateInitialMousePos = (e: MouseEvent) => {
        if (initialPosition.current) {
          initialPosition.current.x = e.pageX;
          initialPosition.current.y = e.pageY;
          window.removeEventListener('mousemove', updateInitialMousePos);
        }
      };

      window.addEventListener('mousemove', updateInitialMousePos, { once: true });
      window.addEventListener('mousemove', updatePiecePosition);
    } else {
      setDragPosition(null);
    }

    return () => {
      window.removeEventListener('mousemove', updatePiecePosition);
      initialPosition.current = null;
    };
  }, [isDragging, updatePiecePosition]);

  const renderPiece = useCallback(() => {
    if (!pieceContent) return null;

    return (
      <img
        src={pieceContent}
        alt={`${pieceColor} ${pieceName}`}
        className="piece-svg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: isDragging ? 0.8 : 1,
          filter: piece.startsWith('b') ? 'brightness(0.2)' : 'none',
          userSelect: 'none',
          WebkitUserDrag: 'none'
        }}
      />
    );
  }, [pieceContent, isDragging, piece, pieceColor, pieceName]);
  
  return (
    <>
      <div
        ref={pieceRef}
        className={`piece ${isDragging ? 'dragging' : ''}`}
        data-piece={piece}
        data-square={square}
        role="piece"
        aria-label={ariaLabel}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'none' : 'transform 0.2s ease',
          pointerEvents: isDragging ? 'none' : 'auto',
          touchAction: 'none',
          willChange: 'transform',
          transformOrigin: 'center',
          zIndex: isDragging ? 9999 : 1,
          opacity: isDragging ? 0 : 1,
          backgroundColor: 'transparent'
        }}
      >
        {!isDragging && renderPiece()}
        <span className="visually-hidden">
          {ariaLabel}
        </span>
      </div>

      {isDragging && dragPosition && createPortal(
        <div
          className="dragged-piece"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: initialPosition.current?.rect.width,
            height: initialPosition.current?.rect.height,
            transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`,
            zIndex: 9999,
            pointerEvents: 'none',
            willChange: 'transform',
            backgroundColor: 'transparent'
          }}
        >
          {renderPiece()}
        </div>,
        document.body
      )}

      <style>{`
        .piece-svg {
          user-select: none;
          -webkit-user-drag: none;
        }
        
        .chess-board {
          position: relative;
        }

        .chess-board .square {
          position: relative;
          z-index: 1;
        }

        .piece {
          position: absolute;
          z-index: 2;
          transform-origin: center;
          background-color: transparent !important;
        }

        .piece.dragging {
          z-index: 9999;
          pointer-events: none;
        }

        .dragged-piece {
          pointer-events: none;
          transform-origin: center;
          background-color: transparent !important;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
});

Piece.displayName = 'Piece';

export { Piece }; 