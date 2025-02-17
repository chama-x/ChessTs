# Chess Datasets

This directory contains JSON datasets for chess openings, puzzles, and book moves that are bundled with the `@chama-x/reactchessts` package.

## Structure

### openings.json
Contains a collection of chess openings with:
- ECO codes
- Opening names
- Move sequences
- FEN positions
- Explanations
- Variations

### puzzles.json
Contains chess puzzles with:
- Unique IDs
- FEN positions
- Solution moves
- Categories
- Difficulty levels
- Ratings
- Themes
- Explanations and hints

### bookMoves.json
Contains opening book positions with:
- FEN positions
- Move statistics (frequency, win rates, draw rates)
- Next moves
- Total games
- Average ELO ratings

## Usage

```typescript
// Import the datasets directly
import openingsData from '@chama-x/reactchessts/src/data/datasets/openings.json';
import puzzlesData from '@chama-x/reactchessts/src/data/datasets/puzzles.json';
import bookMovesData from '@chama-x/reactchessts/src/data/datasets/bookMoves.json';

// Or use the provided utility functions
import { getOpeningByFEN, getOpeningByECO } from '@chama-x/reactchessts';
import { getPuzzlesByDifficulty, getPuzzlesByRating } from '@chama-x/reactchessts';
import { getBookPosition, getBestBookMove } from '@chama-x/reactchessts';
```

## Data Format

Each dataset follows a specific schema. See the TypeScript interfaces in the respective `.ts` files for detailed type information. 