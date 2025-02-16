import { ChessBoard } from './components/ChessBoard';
import { PieceProvider } from './components/PieceProvider';
import { ChessProvider, useChess } from './context/ChessContext';

function GameContent() {
  const { 
    reset, 
    undo, 
    turn, 
    isCheck, 
    isCheckmate, 
    isStalemate, 
    isThreefoldRepetition,
    isFiftyMoveRule,
    isInsufficientMaterial,
    history, 
    makeMove 
  } = useChess();

  const handlePieceDrop = (from: string, to: string, piece: string) => {
    return makeMove(from, to);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>React Chess</h1>
      </header>
      
      <main className="main-content">
        <div className="game-container">
          <div className="board-container">
            <ChessBoard onPieceDrop={handlePieceDrop} />
          </div>
          
          <div className="game-info">
            <div className="controls">
              <button onClick={reset}>New Game</button>
              <button onClick={undo}>Undo</button>
            </div>
            
            <div className="status">
              <div className="turn">
                Turn: <span>{turn === 'w' ? 'White' : 'Black'}</span>
              </div>
              {isCheck && <div className="check">Check!</div>}
              {isCheckmate && <div className="checkmate">Checkmate!</div>}
              {isStalemate && <div className="stalemate">Stalemate</div>}
              {isThreefoldRepetition && <div className="draw">Draw (Threefold Repetition)</div>}
              {isFiftyMoveRule && <div className="draw">Draw (Fifty-Move Rule)</div>}
              {isInsufficientMaterial && <div className="draw">Draw (Insufficient Material)</div>}
            </div>

            <div className="history">
              <h3>Move History</h3>
              <div className="moves">
                {history.map((move, i) => (
                  <span key={i} className="move">
                    {i % 2 === 0 ? `${Math.floor(i / 2) + 1}. ` : ''}{move}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .app {
          min-height: 100vh;
          background: #f0f2f5;
          display: flex;
          flex-direction: column;
        }

        .header {
          background: #2c3e50;
          color: white;
          padding: 1rem;
          text-align: center;
        }

        .main-content {
          flex: 1;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .game-container {
          display: flex;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }

        .board-container {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          aspect-ratio: 1;
        }

        .game-info {
          flex: 1;
          min-width: 250px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .controls {
          display: flex;
          gap: 1rem;
        }

        .controls button {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background: #2c3e50;
          color: white;
          cursor: pointer;
          transition: background 0.2s;
        }

        .controls button:hover {
          background: #34495e;
        }

        .status {
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 4px;
          font-size: 1.1rem;
        }

        .turn {
          margin-bottom: 0.5rem;
        }

        .turn span {
          font-weight: bold;
          color: #2c3e50;
        }

        .check, .checkmate, .stalemate, .draw {
          margin-top: 0.5rem;
          padding: 0.5rem;
          border-radius: 4px;
          text-align: center;
          font-weight: bold;
        }

        .check {
          background: #ffeeba;
          color: #856404;
        }

        .checkmate {
          background: #f8d7da;
          color: #721c24;
        }

        .stalemate, .draw {
          background: #e2e3e5;
          color: #383d41;
        }

        .history {
          flex: 1;
          overflow-y: auto;
          max-height: 300px;
        }

        .history h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .moves {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .move {
          padding: 0.25rem 0.5rem;
          background: #f8f9fa;
          border-radius: 4px;
          font-family: monospace;
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 1rem;
          }

          .game-container {
            gap: 1rem;
          }

          .board-container {
            min-width: 280px;
          }

          .game-info {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <ChessProvider>
      <PieceProvider>
        <GameContent />
      </PieceProvider>
    </ChessProvider>
  );
}

export default App;
