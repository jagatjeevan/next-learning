import { render } from '@testing-library/react';
import About from '../../pages/about.js';

describe('App', () => {
  test('renders a text', () => {
    const { container, getByText } = render(<About />);
    expect(getByText('About Page')).toBeInTheDocument();
  });
});
