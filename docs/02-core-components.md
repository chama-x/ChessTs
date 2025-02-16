# Core Components Development

## Component Architecture

### 1. ChessBoard Component

The main component that renders the chess board and manages piece movement.

```typescript
interface BoardProps {
  position?: string | Record<string, PieceSymbol>;
  onPieceDrop?: (source: string, target: string, piece: string) => boolean;
  orientation?: 'white' | 'black';
  customSquareStyles?: Record<string, CSSProperties>;
  theme?: string;
}
```

Features:

- Dynamic board rendering
- Piece placement and movement
- Drag and drop support
- Board orientation
- Custom square styling
- Theme support

### 2. Piece Component

Renders individual chess pieces with support for different themes and animations.

```typescript
interface PieceProps {
  piece: PieceSymbol;
  square: string;
  isDragging: boolean;
  theme?: string;
}
```

Features:

- SVG-based piece rendering
- Drag and drop animations
- Theme support
- Hover effects
- Performance optimizations

### 3. PieceProvider Component

Manages piece themes and SVG assets across the application.

```typescript
interface PieceContextType {
  currentTheme: string;
  themes: Record<string, PieceTheme>;
  loadTheme: (name: string) => Promise<void>;
  getPieceSvg: (piece: PieceSymbol) => string | null;
}
```

Features:

- Theme management
- Dynamic SVG loading
- Caching support
- Error handling

## Asset Structure

### Piece SVG Organization

```
src/assets/pieces/
├── README.md          # Naming convention documentation
├── default/           # Default theme
│   ├── wp.svg        # White pawn
│   ├── wn.svg        # White knight
│   └── ...           # Other pieces
├── classic/          # Classic theme
└── modern/           # Modern theme
```

### SVG Requirements

- Viewbox: 45x45
- Use currentColor
- Optimized paths
- Consistent style

## Implementation Details

### 1. Board Generation

- 8x8 grid using CSS Grid
- Alternating square colors
- Coordinate notation
- Responsive design

### 2. Piece Movement

- Drag and drop implementation
- Move validation
- Animation system
- Event handling

### 3. Theme System

- Dynamic theme loading
- SVG optimization
- Caching strategy
- Fallback handling

## Usage Examples

### Basic Board

```typescript
import { ChessBoard } from 'react-chess-toolkit';

function App() {
  return <ChessBoard />;
}
```

### Custom Theme

```typescript
function App() {
  return (
    <PieceProvider defaultTheme="classic">
      <ChessBoard theme="classic" />
    </PieceProvider>
  );
}
```

### Interactive Board

```typescript
function App() {
  const handleMove = (from: string, to: string, piece: string) => {
    console.log(`Moving ${piece} from ${from} to ${to}`);
    return true; // Allow move
  };

  return <ChessBoard onPieceDrop={handleMove} />;
}
```

## Performance Considerations

1. **Rendering Optimization**
   - React.memo for pieces
   - CSS transforms for animations
   - SVG optimization
   - Lazy loading for themes

2. **Event Handling**
   - Debounced events
   - Touch event support
   - Gesture recognition

3. **Asset Management**
   - SVG sprite sheets
   - Theme preloading
   - Cache management

## Accessibility Features

1. **Keyboard Navigation**
   - Arrow key movement
   - Space/Enter for selection
   - Escape to cancel

2. **Screen Readers**
   - ARIA labels
   - Move announcements
   - State descriptions

3. **Visual Assistance**
   - High contrast mode
   - Large piece option
   - Move indicators

## Testing Strategy

1. **Unit Tests**
   - Component rendering
   - Prop validation
   - Event handling

2. **Integration Tests**
   - Move validation
   - Theme switching
   - Drag and drop

3. **Visual Tests**
   - Theme consistency
   - Animation smoothness
   - Responsive design
