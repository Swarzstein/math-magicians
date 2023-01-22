import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote Visible', () => {
  test('Renders Quote component', () => {
    const QuoteRendered = render(<Quote />);
    expect(QuoteRendered).toMatchSnapshot();
  });

  test('Check for quote in page', () => {
    render(<Quote />);
    const quote = screen.getByText(
      'Mathematics is not about numbers, equations, computation, or algorithms; it\'s about understanding. - William Paul Thurston',
    );
    expect(quote).toBeInTheDocument();
  });
});
