import { OpeningData } from '../types/chess';
import type { ChessPuzzle, BookPosition } from '../types/chess';

// LRU Cache implementation for efficient data storage
class LRUCache<T> {
  private capacity: number;
  private cache: Map<string, T>;
  private usage: string[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.usage = [];
  }

  get(key: string): T | undefined {
    if (!this.cache.has(key)) return undefined;
    
    // Move to most recently used
    this.usage = this.usage.filter(k => k !== key);
    this.usage.push(key);
    
    return this.cache.get(key);
  }

  set(key: string, value: T): void {
    if (this.cache.size >= this.capacity && !this.cache.has(key)) {
      // Remove least recently used
      const lru = this.usage.shift();
      if (lru) this.cache.delete(lru);
    }

    this.cache.set(key, value);
    this.usage = this.usage.filter(k => k !== key);
    this.usage.push(key);
  }
}

// Cache instances for different data types
const openingsCache = new LRUCache<OpeningData>(100);
const puzzlesCache = new LRUCache<ChessPuzzle>(50);
const bookMovesCache = new LRUCache<BookPosition>(200);

// Data chunk size for progressive loading
const CHUNK_SIZE = 50;

interface DataLoadingOptions {
  progressive?: boolean;
  priority?: 'high' | 'medium' | 'low';
  cacheSize?: number;
}

// Progressive data loading function
export const loadOpenings = async (
  ecoRange: [string, string],
  options: DataLoadingOptions = {}
): Promise<OpeningData[]> => {
  const cached = openingsCache.get(`${ecoRange[0]}-${ecoRange[1]}`);
  if (cached) return [cached];

  // Simulate API call or database query
  // In real implementation, this would fetch from your data source
  return new Promise(resolve => {
    setTimeout(() => {
      // Simulated data fetch
      const openings: OpeningData[] = [];
      resolve(openings);
    }, 100);
  });
};

export const loadPuzzles = async (
  rating: number,
  count: number,
  options: DataLoadingOptions = {}
): Promise<ChessPuzzle[]> => {
  const cacheKey = `puzzles-${rating}-${count}`;
  const cached = puzzlesCache.get(cacheKey);
  if (cached) return [cached];

  // Implement actual puzzle loading logic
  return new Promise(resolve => {
    setTimeout(() => {
      const puzzles: ChessPuzzle[] = [];
      resolve(puzzles);
    }, 100);
  });
};

export const loadBookMoves = async (
  fen: string,
  depth: number,
  options: DataLoadingOptions = {}
): Promise<BookPosition | undefined> => {
  const cached = bookMovesCache.get(fen);
  if (cached) return cached;

  // Implement actual book moves loading logic
  return new Promise(resolve => {
    setTimeout(() => {
      const position: BookPosition | undefined = undefined;
      if (position) bookMovesCache.set(fen, position);
      resolve(position);
    }, 100);
  });
};

// Preload frequently used data
export const preloadCommonData = async (): Promise<void> => {
  const commonOpenings = ['A00', 'B20', 'C60', 'D00', 'E00'];
  const commonRatings = [1200, 1400, 1600, 1800, 2000];

  await Promise.all([
    ...commonOpenings.map(eco => 
      loadOpenings([eco, eco], { priority: 'high' })
    ),
    ...commonRatings.map(rating =>
      loadPuzzles(rating, 10, { priority: 'high' })
    )
  ]);
};

// Data update notification system
type DataUpdateListener = () => void;
const listeners = new Set<DataUpdateListener>();

export const subscribeToDataUpdates = (listener: DataUpdateListener): () => void => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const notifyDataUpdate = (): void => {
  listeners.forEach(listener => listener());
}; 