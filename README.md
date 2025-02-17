# ReactChessTs 🎮♟️

A modern React TypeScript chess development toolkit with drag-and-drop support, themes, and full chess rules implementation.

[![npm version](https://img.shields.io/npm/v/reactchessts.svg)](https://www.npmjs.com/package/reactchessts)
[![GitHub Package Version](https://img.shields.io/github/package-json/v/chama-x/ReactChessTs)](https://github.com/chama-x/ReactChessTs/packages)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## Features ✨

- 🎯 Full chess rules implementation with [chess.js](https://github.com/jhlywa/chess.js)
- 🎨 Customizable themes and piece styles
- 🖱️ Drag-and-drop and click-to-move support
- ⌨️ Keyboard navigation for accessibility
- 📱 Responsive design
- 🎮 Game state management with React Context
- 🔄 Move history tracking
- ⚡ Zero-config setup
- 🎭 Multiple piece themes support
- 📦 Tree-shakeable ES modules

## Quick Start 🚀

```bash
# npm
npm install reactchessts

# yarn
yarn add reactchessts

# pnpm
pnpm add reactchessts
```

## Basic Usage 💻

```tsx
import { ChessBoard, ChessProvider, PieceProvider } from 'reactchessts';

function App() {
  return (
    <ChessProvider>
      <PieceProvider>
        <ChessBoard />
      </PieceProvider>
    </ChessProvider>
  );
}
```

## Advanced Usage 🛠️

### Custom Move Validation

```tsx
function App() {
  const handleMove = (from: string, to: string, piece: string) => {
    console.log(`Moving ${piece} from ${from} to ${to}`);
    // Return true to allow move, false to prevent
    return true;
  };

  return (
    <ChessProvider>
      <PieceProvider>
        <ChessBoard onPieceDrop={handleMove} />
      </PieceProvider>
    </ChessProvider>
  );
}
```

### Game State Management

```tsx
function GameStatus() {
  const { 
    position,
    turn,
    isCheck,
    isCheckmate,
    isStalemate,
    isDraw,
    history,
    makeMove,
    undo,
    reset
  } = useChess();

  return (
    <div>
      <p>Turn: {turn === 'w' ? 'White' : 'Black'}</p>
      {isCheck && <p>Check!</p>}
      {isCheckmate && <p>Checkmate!</p>}
      <button onClick={undo}>Undo</button>
      <button onClick={reset}>New Game</button>
    </div>
  );
}
```

### Custom Styling

```tsx
function App() {
  const customStyles = {
    'e4': { backgroundColor: 'rgba(255, 255, 0, 0.3)' },
    'd4': { backgroundColor: 'rgba(0, 255, 0, 0.3)' }
  };

  return (
    <ChessProvider>
      <PieceProvider>
        <ChessBoard 
          orientation="black"
          customSquareStyles={customStyles}
        />
      </PieceProvider>
    </ChessProvider>
  );
}
```

## API Reference 📚

### ChessBoard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onPieceDrop | (source: string, target: string, piece: string) => boolean | undefined | Callback when a piece is moved |
| orientation | 'white' \| 'black' | 'white' | Board orientation |
| customSquareStyles | Record<string, CSSProperties> | {} | Custom styles for squares |
| theme | string | 'default' | Piece theme name |

### Hooks

#### useChess

```tsx
const {
  position,    // Current FEN position
  turn,        // Current turn ('w' or 'b')
  isCheck,     // Is king in check
  isCheckmate, // Is game over by checkmate
  isStalemate, // Is game over by stalemate
  isDraw,      // Is game drawn
  history,     // Move history
  makeMove,    // Function to make a move
  undo,        // Function to undo last move
  reset        // Function to reset game
} = useChess();
```

## Browser Support 🌐

- Chrome ≥ 60
- Firefox ≥ 54
- Safari ≥ 10
- Edge ≥ 79

## Contributing 🤝

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support 💬

- Create an [issue](https://github.com/chama-x/ReactChessTs/issues)
- Join our [Discord community](https://discord.gg/your-discord)
- Email: your.email@example.com

## Acknowledgments 🙏

- [chess.js](https://github.com/jhlywa/chess.js) for chess logic
- React and TypeScript communities
- All our contributors and users
