import openingsData from './datasets/openings.json';
import type { OpeningData } from '../types/chess';

// Efficient lookup by position
export const POSITION_TO_OPENING = new Map<string, OpeningData>();

// Initialize the lookup map
openingsData.openings.forEach(opening => {
  POSITION_TO_OPENING.set(opening.fen, opening as OpeningData);
});

// Helper function to get opening by FEN
export const getOpeningByFEN = (fen: string): OpeningData | undefined => {
  return POSITION_TO_OPENING.get(fen);
};

// Helper function to get opening by ECO code
export const getOpeningByECO = (eco: string): OpeningData | undefined => {
  return openingsData.openings.find(opening => opening.eco === eco) as OpeningData | undefined;
};

// Export the raw data for direct access if needed
export const OPENINGS_DATABASE = openingsData.openings as OpeningData[]; 