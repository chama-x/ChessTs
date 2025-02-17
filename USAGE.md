# ReactChessTS Usage Guide

## 🚀 Quick Setup (Copy-Paste Ready)

### 1. Install the package
```bash
npm install reactchessts
```

### 2. Create a new chess game (Minimal Setup)
```tsx
// App.tsx or any component file
import { ChessBoard, ChessProvider, PieceProvider } from 'reactchessts';

export default function App() {
  return (
    <ChessProvider>
      <PieceProvider>
        <ChessBoard />
      </PieceProvider>
    </ChessProvider>
  );
}
```

That's it! You now have a fully functional chess game with:
- Drag and drop moves
- Legal move validation
- Turn management
- Check/Checkmate detection
- Move history

## 🎨 Common Use Cases (Copy-Paste Ready)

### 1. Basic Chess Game with Controls
```tsx
import { ChessBoard, ChessProvider, PieceProvider, useChess } from 'reactchessts';

function ChessGame() {
  const { turn, isCheck, isCheckmate, undo, reset } = useChess();
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2>Chess Game</h2>
        <p>Turn: {turn === 'w' ? 'White' : 'Black'}</p>
        {isCheck && <p style={{ color: 'red' }}>Check!</p>}
        {isCheckmate && <p style={{ color: 'red' }}>Checkmate!</p>}
      </div>
      
      <ChessBoard />
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={undo}>Undo Move</button>
        <button onClick={reset}>New Game</button>
      </div>
    </div>
  );
}

// Wrap with providers
export default function App() {
  return (
    <ChessProvider>
      <PieceProvider>
        <ChessGame />
      </PieceProvider>
    </ChessProvider>
  );
}
```

### 2. Chess Training App
```tsx
import { ChessBoard, ChessProvider, PieceProvider, useChessTraining } from 'reactchessts';

function TrainingApp() {
  const { mode, startTraining, feedback, stats } = useChessTraining();
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <ChessBoard />
        </div>
        
        <div style={{ flex: 1 }}>
          <h3>Training Mode: {mode}</h3>
          <div style={{ marginBottom: '20px' }}>
            <button onClick={() => startTraining('puzzle')}>Practice Puzzles</button>
            <button onClick={() => startTraining('opening')}>Learn Openings</button>
          </div>
          
          {feedback && (
            <div style={{ 
              padding: '10px', 
              backgroundColor: '#f0f0f0',
              borderRadius: '4px'
            }}>
              {feedback}
            </div>
          )}
          
          <div style={{ marginTop: '20px' }}>
            <h4>Statistics</h4>
            <p>Puzzles Solved: {stats.puzzlesSolved}</p>
            <p>Accuracy: {stats.averageAccuracy}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ChessProvider>
      <PieceProvider>
        <TrainingApp />
      </PieceProvider>
    </ChessProvider>
  );
}
```

### 3. Chess Analysis Tool
```tsx
import { 
  ChessBoard, 
  ChessProvider, 
  PieceProvider, 
  useChess,
  useGameAnalysis 
} from 'reactchessts';

function AnalysisTool() {
  const { history } = useChess();
  const { moveAnalysis, gameStats } = useGameAnalysis();
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '20px' }}>
      <div style={{ flex: 2 }}>
        <ChessBoard />
      </div>
      
      <div style={{ flex: 1 }}>
        <div style={{ 
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3>Game Analysis</h3>
          <div>
            <h4>Statistics</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Moves: {history.length}</li>
              <li>Captures: {gameStats.captures}</li>
              <li>Checks: {gameStats.checks}</li>
              <li>Mistakes: {gameStats.mistakes}</li>
            </ul>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <h4>Move History</h4>
            <div style={{ 
              maxHeight: '300px', 
              overflowY: 'auto',
              border: '1px solid #eee',
              padding: '10px'
            }}>
              {history.map((move, i) => (
                <div key={i} style={{ padding: '5px 0' }}>
                  {i + 1}. {move}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ChessProvider>
      <PieceProvider>
        <AnalysisTool />
      </PieceProvider>
    </ChessProvider>
  );
}
```

## 🎯 Quick Customization

### Custom Theme
```tsx
<ChessBoard 
  theme="classic"  // or "modern", "minimalist"
  customSquareStyles={{
    lastMove: { backgroundColor: 'rgba(255, 255, 0, 0.2)' },
    selected: { backgroundColor: 'rgba(0, 255, 0, 0.2)' },
    check: { backgroundColor: 'rgba(255, 0, 0, 0.2)' }
  }}
/>
```

### Custom Move Validation
```tsx
<ChessBoard
  onPieceDrop={(from, to, piece) => {
    // Allow only knight moves
    return piece.toLowerCase() === 'n';
  }}
/>
```

### Custom Board Orientation
```tsx
<ChessBoard orientation="black" />  // or "white"
```

## 🔧 Advanced Features (But Still Easy)

### 1. Opening Explorer
```tsx
import { useOpeningBook } from 'reactchessts';

function OpeningExplorer() {
  const { currentOpening, suggestedMoves } = useOpeningBook();
  
  return currentOpening && (
    <div>
      <h3>{currentOpening.name}</h3>
      <ul>
        {suggestedMoves.map(move => (
          <li key={move}>{move}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 2. Puzzle Mode
```tsx
import { usePuzzleTraining } from 'reactchessts';

function PuzzleMode() {
  const { currentPuzzle, getHint } = usePuzzleTraining();
  
  return currentPuzzle && (
    <div>
      <p>Rating: {currentPuzzle.rating}</p>
      <button onClick={getHint}>Get Hint</button>
    </div>
  );
}
```

### 3. Keyboard Navigation
```tsx
import { useKeyboardNavigation } from 'reactchessts';

function AccessibleGame() {
  const { focusedSquare } = useKeyboardNavigation();
  
  return (
    <ChessBoard
      customSquareStyles={{
        [focusedSquare]: { outline: '2px solid blue' }
      }}
    />
  );
}
```

## 🎁 Bonus: AI Integration Tips

### 1. Move Generation for AI
```tsx
const { getPossibleMoves, makeMove } = useChess();

// Get all legal moves for AI
const aiSquare = 'e2';
const legalMoves = getPossibleMoves(aiSquare);

// Make AI move
makeMove(aiSquare, legalMoves[0]);
```

### 2. Position Analysis
```tsx
const { position, history } = useChess();
const { currentEvaluation } = useGameAnalysis();

// Current position in FEN format for AI
console.log(position);

// Move history for AI learning
console.log(history);

// Current position evaluation
console.log(currentEvaluation);
```

## 🤝 Need Help?

- Check our [GitHub repository](https://github.com/chama-x/ReactChessTs)
- Open an issue for bugs
- Submit feature requests
- Join our community

## 📝 License

MIT © Chamath Thiwanka 