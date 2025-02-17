# ReactChessTS 🎮♟️

<div align="center">
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=200&text=ReactChessTS&color=0:BE0039,50:BE0055,100:BE0071&fontColor=ffffff&fontSize=50&animation=fadeIn" alt="ReactChessTS Banner" style="max-width: 100%; height: auto;">
</div>


[![npm version](https://img.shields.io/npm/v/reactchessts.svg?color=BE0055)](https://www.npmjs.com/package/reactchessts)
[![License: MIT](https://img.shields.io/badge/License-MIT-BE0071.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-BE0039.svg)](https://www.typescriptlang.org/)

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Montserrat&weight=600&duration=4000&pause=1000&color=BE0055&width=435&lines=Modern+Chess+Development+Made+Easy;Powerful+Features,+Zero+Configuration;Create+Amazing+Chess+Apps+in+Minutes" alt="Typing SVG" /></a>

</div>

## ✨ Why ReactChessTS?

Build professional chess applications without the complexity. We've done the hard work for you:

- 🎯 **Zero Configuration** - Just install and start building
- 🎨 **Beautiful UI** - Modern, responsive design out of the box
- 🔥 **Full TypeScript Support** - Complete type safety and autocompletion
- 🚀 **Production Ready** - Used in real-world applications
- 🧩 **Modular Design** - Use only what you need
- 📚 **Rich Features** - Everything you need for chess development

## 🚀 Quick Start

```bash
npm install reactchessts
```

```tsx
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
- ♟️ Drag and drop moves
- ✅ Legal move validation
- 🎮 Game state management
- ⚡ Real-time check/checkmate detection
- 📝 Move history tracking

## 🎨 Beautiful Examples (Copy-Paste Ready)

### 1. Professional Chess Game
```tsx
import { ChessBoard, ChessProvider, PieceProvider, useChess } from 'reactchessts';

function ChessGame() {
  const { turn, isCheck, isCheckmate, undo, reset } = useChess();
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ 
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ color: '#BE0055' }}>Chess Game</h2>
        <ChessBoard />
        <div style={{ marginTop: '20px' }}>
          <button onClick={undo}>Undo Move</button>
          <button onClick={reset}>New Game</button>
        </div>
      </div>
    </div>
  );
}
```

### 2. Training Platform
```tsx
import { useChessTraining } from 'reactchessts';

function TrainingMode() {
  const { startTraining, feedback, stats } = useChessTraining();
  
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ChessBoard />
      <div>
        <button onClick={() => startTraining('puzzle')}>
          Start Training
        </button>
        <p>Accuracy: {stats.averageAccuracy}%</p>
      </div>
    </div>
  );
}
```

## 🎯 Features That Just Work

- 🎮 **Game Logic**
  - Full chess rules implementation
  - Move validation
  - Check/Checkmate detection
  - Game state management

- 🎨 **UI Components**
  - Responsive chess board
  - Piece animations
  - Custom themes
  - Square highlighting

- 📚 **Training Tools**
  - Opening explorer
  - Puzzle system
  - Game analysis
  - Move suggestions

- ⌨️ **Accessibility**
  - Keyboard navigation
  - Screen reader support
  - ARIA labels
  - High contrast mode

## 🔧 Easy Customization

```tsx
<ChessBoard 
  theme="classic"
  orientation="black"
  customSquareStyles={{
    lastMove: { backgroundColor: 'rgba(190, 0, 85, 0.2)' }
  }}
/>
```

## 🤖 AI-Ready

```tsx
// Get legal moves for AI
const { getPossibleMoves, makeMove } = useChess();
const legalMoves = getPossibleMoves('e2');

// Make AI move
makeMove('e2', 'e4');

// Get position for analysis
const { position, history } = useChess();
console.log(position); // FEN format
```

## 🤝 Connect & Support

<div align="center" style="background: linear-gradient(45deg, #BE0039, #BE0071); padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="color: white;">Let's make chess development better together!</p>
    <a href="https://github.com/chama-x/ReactChessTs">
        <img src="https://img.shields.io/badge/GitHub-BE0055?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </a>
</div>

- 🐛 Report bugs and issues
- 💡 Request features
- 🤝 Contribute to the project
- 💬 Join our community

## 📝 License

MIT © [Chamath Thiwanka](https://github.com/chama-x)

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&height=100&section=footer&color=0:BE0039,50:BE0055,100:BE0071">
</div>
