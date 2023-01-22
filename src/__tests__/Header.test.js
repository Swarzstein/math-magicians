import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Test', () => {
  test('Renders Header component', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const headerTitle = screen.getByText('Math Magicians');
    const headerLink1 = screen.getByText('Calculator');
    const headerLink2 = screen.getByText('Quote');
    expect(headerTitle).toBeInTheDocument();
    expect(headerLink1).toBeInTheDocument();
    expect(headerLink2).toBeInTheDocument();
  });
});
