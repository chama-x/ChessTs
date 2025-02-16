# Chess Logic Implementation

## Core Components

### ChessContext

The chess logic is implemented using React Context to provide game state and methods throughout the application. The main components are:

```typescript
interface ChessContextType {
  game: Chess;                    // chess.js instance
  position: string;               // Current FEN position
  isCheck: boolean;               // Is king in check
  isCheckmate: boolean;           // Is game over by checkmate
  isStalemate: boolean;           // Is game over by stalemate
  isDraw: boolean;                // Is game drawn
  isThreefoldRepetition: boolean; // Is draw by repetition
  isFiftyMoveRule: boolean;       // Is draw by fifty-move rule
  isInsufficientMaterial: boolean;// Is draw by insufficient material
  turn: 'w' | 'b';                // Current player's turn
  history: string[];              // Move history in SAN
  makeMove: (from: string, to: string) => boolean;
  undo: () => boolean;
  reset: () => void;
  getPossibleMoves: (square: string) => string[];
}
```

## Move Validation and Execution

### Making Moves

The `makeMove` function handles move execution with proper validation:

```typescript
const makeMove = (from: string, to: string): boolean => {
  // 1. Get all legal moves from the source square
  const moves = game.moves({ square: from, verbose: true });
  
  // 2. Find the exact matching move to the target square
  const move = moves.find(m => m.to === to);
  
  // 3. Execute the move if found
  if (move) {
    const result = game.move(move);
    if (result) {
      updateGameState();
      return true;
    }
  }
  return false;
};
```

Key aspects:

- Uses chess.js's built-in move validation
- Handles all special moves (castling, en passant, promotion)
- Updates game state after successful moves
- Returns boolean indicating move success

### Getting Possible Moves

The `getPossibleMoves` function determines valid moves for a piece:

```typescript
const getPossibleMoves = (square: string): string[] => {
  // 1. Get moves in algebraic notation
  const moves = game.moves({ 
    square: square,
    verbose: false 
  });
  
  // 2. Convert to destination squares
  return moves.map(move => {
    // Handle castling
    if (move === 'O-O' || move === 'O-O-O') {
      const rank = game.turn() === 'w' ? '1' : '8';
      return move === 'O-O' ? `g${rank}` : `c${rank}`;
    }
    // Extract destination square
    const match = move.match(/[a-h][1-8]/);
    return match ? match[0] : '';
  }).filter(Boolean);
};
```

Features:

- Extracts destination squares from algebraic notation
- Handles special case of castling moves
- Returns array of valid target squares

## Game State Management

### Position Tracking

The game state is tracked using several mechanisms:

1. FEN Position:

```typescript
const [position, setPosition] = useState(game.fen());
```

- Represents complete game state
- Updated after each move
- Used for board rendering

2. Move History:

```typescript
const [history, setHistory] = useState<string[]>([]);
```

- Tracks all moves in Standard Algebraic Notation (SAN)
- Updated with each move
- Used for move list display

3. Position History:

```typescript
const [positionHistory, setPositionHistory] = useState<Map<string, number>>(new Map());
```

- Tracks repeated positions
- Used for threefold repetition detection
- Updated after each move

### Game State Updates

The `updateGameState` function manages state synchronization:

```typescript
const updateGameState = () => {
  const newPosition = game.fen();
  setPosition(newPosition);
  setHistory(game.history({ verbose: true }).map(move => move.san));
  
  // Track position repetitions
  const positionKey = newPosition.split(' ').slice(0, 4).join(' ');
  setPositionHistory(prev => {
    const newMap = new Map(prev);
    newMap.set(positionKey, (newMap.get(positionKey) || 0) + 1);
    return newMap;
  });
};
```

## Draw Detection

The implementation includes multiple draw detection mechanisms:

### 1. Threefold Repetition

```typescript
const isThreefoldRepetition = () => {
  const currentPosition = game.fen().split(' ').slice(0, 4).join(' ');
  return (positionHistory.get(currentPosition) || 0) >= 3;
};
```

- Tracks position occurrences
- Considers only piece positions and castling rights
- Triggers draw when position occurs three times

### 2. Fifty-Move Rule

```typescript
const isFiftyMoveRule = () => {
  const [, , , , halfMoves] = game.fen().split(' ');
  return parseInt(halfMoves) >= 100;
};
```

- Tracks moves without pawn moves or captures
- Triggers draw after 50 moves (100 half-moves)

### 3. Insufficient Material

```typescript
const isInsufficientMaterial = () => {
  const pieces = game.board().flat().filter(piece => piece !== null);
  if (pieces.length <= 3) {
    // King vs. King
    if (pieces.length === 2) return true;
    
    // King and minor piece vs. King
    if (pieces.length === 3) {
      const nonKingPiece = pieces.find(piece => piece?.type !== 'k');
      return nonKingPiece?.type === 'b' || nonKingPiece?.type === 'n';
    }
  }
  return false;
};
```

- Detects positions where checkmate is impossible
- Handles common cases:
  - King vs. King
  - King + Bishop vs. King
  - King + Knight vs. King

## Game Control Methods

### Reset

```typescript
const reset = () => {
  game.reset();
  setPositionHistory(new Map());
  updateGameState();
};
```

- Resets to initial position
- Clears position history
- Updates all game state

### Undo

```typescript
const undo = () => {
  const success = game.undo() !== null;
  if (success) {
    updateGameState();
  }
  return success;
};
```

- Reverts last move
- Updates game state if successful
- Returns success indicator

## Integration with UI

The chess logic integrates with the UI through:

1. Position Updates:

- FEN string updates trigger board re-renders
- Piece positions automatically update

2. Move Validation:

- Valid moves highlighted on piece selection
- Invalid moves prevented
- Visual feedback for legal moves

3. Game Status:

- Turn indicator
- Check/Checkmate/Draw status
- Move history display

4. User Interactions:

- Click-to-move support
- Drag-and-drop support
- Move validation feedback

## Core Chess Functions

### Move Validation

```typescript
const isValidMove = (
  from: string,
  to: string,
  piece: string,
  position: Record<string, string>
): boolean => {
  // Implementation details for:
  // - Piece movement rules
  // - Check detection
  // - Pin detection
  // - Castle validation
  // - En passant validation
  // - Pawn promotion
};
```

### Position Management

```typescript
const generateFEN = (position: Record<string, string>): string => {
  // Convert position to FEN string
};

const parseFEN = (fen: string): Record<string, string> => {
  // Convert FEN string to position object
};
```

## Chess Rules Implementation

### Basic Rules

- Piece movement patterns
- Capture rules
- Check and checkmate detection
- Stalemate detection
- Draw conditions
- Castling rules
- En passant
- Pawn promotion

### Advanced Features

- Move history tracking
- Position evaluation
- Legal moves generation
- Threefold repetition detection
- Fifty-move rule
- Insufficient material detection

## Utility Functions

- Square coordinate conversion
- Move notation parsing (algebraic notation)
- Position validation
- Game state analysis
- Move generation optimization

## Performance Considerations

- Move validation caching
- Position hashing
- Legal moves pre-calculation
- Memory optimization
- CPU-intensive calculations optimization
