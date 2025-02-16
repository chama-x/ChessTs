import React, { createContext, useContext, useState, useEffect } from 'react';
import { PieceTheme, PieceSymbol, DEFAULT_PIECES, UNICODE_PIECES } from '../types/pieces';

// Import SVGs directly
import wp from '../assets/pieces/default/wp.svg?url';
import wn from '../assets/pieces/default/wn.svg?url';
import wb from '../assets/pieces/default/wb.svg?url';
import wr from '../assets/pieces/default/wr.svg?url';
import wq from '../assets/pieces/default/wq.svg?url';
import wk from '../assets/pieces/default/wk.svg?url';
import bp from '../assets/pieces/default/bp.svg?url';
import bn from '../assets/pieces/default/bn.svg?url';
import bb from '../assets/pieces/default/bb.svg?url';
import br from '../assets/pieces/default/br.svg?url';
import bq from '../assets/pieces/default/bq.svg?url';
import bk from '../assets/pieces/default/bk.svg?url';

// Define SVGs map
const PIECE_SVGS: Record<PieceSymbol, string> = {
  wp, wn, wb, wr, wq, wk,
  bp, bn, bb, br, bq, bk
};

interface PieceContextType {
  currentTheme: string;
  themes: Record<string, PieceTheme>;
  loadTheme: (name: string) => Promise<void>;
  getPieceSvg: (piece: PieceSymbol) => string | null;
}

const PieceContext = createContext<PieceContextType>({
  currentTheme: 'default',
  themes: {},
  loadTheme: async () => {},
  getPieceSvg: () => null,
});

export const usePieces = () => useContext(PieceContext);

interface PieceProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
}

export const PieceProvider: React.FC<PieceProviderProps> = ({
  children,
  defaultTheme = 'default'
}) => {
  const [themes, setThemes] = useState<Record<string, PieceTheme>>({});
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const loadTheme = async (name: string) => {
    if (themes[name]) return;

    try {
      console.log('Loading theme:', name);
      console.log('SVG imports:', {
        wp, wn, wb, wr, wq, wk,
        bp, bn, bb, br, bq, bk
      });
      
      const theme: PieceTheme = {
        name,
        pieces: PIECE_SVGS
      };

      console.log('Theme loaded:', theme);
      setThemes(prev => ({
        ...prev,
        [name]: theme
      }));
      setCurrentTheme(name);
    } catch (error) {
      console.error(`Failed to load theme: ${name}`, error);
    }
  };

  const getPieceSvg = (piece: PieceSymbol): string | null => {
    return PIECE_SVGS[piece] || null;
  };

  useEffect(() => {
    loadTheme(defaultTheme);
  }, [defaultTheme]);

  return (
    <PieceContext.Provider value={{
      currentTheme,
      themes,
      loadTheme,
      getPieceSvg,
    }}>
      {children}
    </PieceContext.Provider>
  );
}; 