import { render, fireEvent } from '@testing-library/react';
import { ChessBoard } from '../src/components/ChessBoard';

describe('ChessBoard', () => {
  it('renders correctly', () => {
    const { container } = render(<ChessBoard />);
    expect(container).toBeInTheDocument();
  });
}); 