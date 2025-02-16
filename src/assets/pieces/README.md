# Chess Piece SVG Assets

This directory contains SVG assets for chess pieces in different themes.

## Directory Structure

```
pieces/
├── default/     # Default theme
├── classic/     # Classic theme
└── modern/      # Modern theme
```

## Naming Convention

Each piece SVG should follow this naming pattern:
`{color}{piece}.svg`

Where:

- `color` is either:
  - `w` for white pieces
  - `b` for black pieces
- `piece` is one of:
  - `p` - pawn
  - `n` - knight
  - `b` - bishop
  - `r` - rook
  - `q` - queen
  - `k` - king

### Example

- `wp.svg` - white pawn
- `bk.svg` - black king
- `wq.svg` - white queen

## SVG Requirements

1. Viewbox: 45x45
2. Single path or group
3. No external dependencies
4. Optimize for performance
5. Maintain consistent style within theme
6. Use currentColor for fill to support color themes

## Example SVG Structure

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="currentColor" stroke="currentColor" stroke-width="1.5">
    <!-- piece path here -->
  </g>
</svg>
```
