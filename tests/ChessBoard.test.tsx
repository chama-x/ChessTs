import { render } from '@testing-library/react';
import { ChessBoard } from '../src/components/ChessBoard';
import { ChessProvider } from '../src/context/ChessContext';
import { PieceProvider } from '../src/components/PieceProvider';

describe('ChessBoard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ChessProvider>
        <PieceProvider>
          <ChessBoard />
        </PieceProvider>
      </ChessProvider>
    );
    expect(container).toBeInTheDocument();
  });
}); 