import { ChessProvider } from './context/ChessContext';
import { PieceProvider } from './components/PieceProvider';
import { ChessTrainer } from './components/ChessTrainer';

function App() {
  return (
    <ChessProvider>
      <PieceProvider>
        <ChessTrainer />
      </PieceProvider>
    </ChessProvider>
  );
}

export default App;
