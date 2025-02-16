# ChessTs

A modern React TypeScript chess development toolkit. This project provides a fully-featured chess game implementation with a beautiful and responsive UI.

## Features

- Full chess rules implementation
- Legal move validation
- Move history tracking
- Game state management
- Draw detection (threefold repetition, fifty-move rule, insufficient material)
- Responsive design
- Drag-and-drop and click-to-move support
- Keyboard navigation
- Accessibility features

## Installation

```bash
npm install chess-ts
```

## Usage

```typescript
import { ChessBoard, ChessProvider, PieceProvider } from 'chess-ts';

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

## Components

### ChessBoard

The main chess board component that handles piece rendering and move validation.

```typescript
interface BoardProps {
  onPieceDrop?: (source: string, target: string, piece: string) => boolean;
  orientation?: 'white' | 'black';
  customSquareStyles?: Record<string, CSSProperties>;
}
```

### ChessProvider

Provides chess game state and methods through React Context.

```typescript
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
```

### PieceProvider

Manages chess piece themes and SVG assets.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [chess.js](https://github.com/jhlywa/chess.js) for chess logic
- React and TypeScript communities
- Contributors and users of this project
