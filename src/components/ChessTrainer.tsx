import React from 'react';
import { ChessBoard } from './ChessBoard';
import { useOpeningBook } from '../hooks/useOpeningBook';
import { useGameAnalysis } from '../hooks/useGameAnalysis';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useMoveValidation } from '../hooks/useMoveValidation';
import { useTrainingMode } from '../hooks/useTrainingMode';
import { useChess } from '../context/ChessContext';

export const ChessTrainer: React.FC = () => {
  const { makeMove } = useChess();
  const { currentOpening, suggestedMoves } = useOpeningBook();
  const { moveAnalysis, gameStats } = useGameAnalysis();
  const { isSquareSelected, isSquareFocused } = useKeyboardNavigation();
  const { hints, activePatterns, getMoveExplanation } = useMoveValidation();
  const { 
    mode, 
    startTraining, 
    handleTrainingMove, 
    feedback, 
    getTrainingState 
  } = useTrainingMode();

  const handlePieceDrop = (from: string, to: string, piece: string) => {
    const explanation = getMoveExplanation(from, to);
    console.log(`Move explanation: ${explanation}`);
    
    if (mode !== 'practice') {
      return handleTrainingMove(from, to);
    }
    
    return makeMove(from, to);
  };

  const trainingState = getTrainingState();

  return (
    <div className="chess-trainer">
      <div className="board-section">
        <ChessBoard onPieceDrop={handlePieceDrop} />
      </div>

      <div className="info-section">
        {/* Training Controls */}
        <div className="training-controls">
          <h3>{trainingState.title}</h3>
          <p>{trainingState.description}</p>
          <div className="progress">{trainingState.progress}</div>
          {feedback && <div className="feedback">{feedback}</div>}
          
          <div className="mode-buttons">
            <button onClick={() => startTraining('practice')}>Practice</button>
            <button onClick={() => startTraining('puzzle')}>Puzzles</button>
            <button onClick={() => startTraining('opening')}>Openings</button>
            <button onClick={() => startTraining('endgame')}>Endgames</button>
          </div>
        </div>

        {/* Opening Information */}
        {currentOpening && (
          <div className="opening-info">
            <h3>Opening: {currentOpening.name}</h3>
            <p>Suggested moves:</p>
            <ul>
              {suggestedMoves.map((move, i) => (
                <li key={i}>{move}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Game Analysis */}
        <div className="game-analysis">
          <h3>Game Statistics</h3>
          <ul>
            <li>Captures: {gameStats.captures}</li>
            <li>Checks: {gameStats.checks}</li>
            <li>Mistakes: {gameStats.mistakes}</li>
          </ul>
        </div>

        {/* Tactical Patterns */}
        {activePatterns.length > 0 && (
          <div className="tactical-patterns">
            <h3>Active Patterns</h3>
            <ul>
              {activePatterns.map((pattern, i) => (
                <li key={i}>{pattern}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        .chess-trainer {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .board-section {
          flex: 1;
          min-width: 400px;
        }

        .info-section {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .training-controls,
        .opening-info,
        .game-analysis,
        .tactical-patterns {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .mode-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          margin-top: 1rem;
        }

        button {
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background: #2c3e50;
          color: white;
          cursor: pointer;
          transition: background 0.2s;
        }

        button:hover {
          background: #34495e;
        }

        .feedback {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 4px;
          background: #f8f9fa;
          border-left: 4px solid #2c3e50;
        }

        h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }

        li:last-child {
          border-bottom: none;
        }

        .progress {
          font-weight: bold;
          color: #2c3e50;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .chess-trainer {
            flex-direction: column;
          }

          .board-section,
          .info-section {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}; 