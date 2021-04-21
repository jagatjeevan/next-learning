import { render } from '@testing-library/react';
import About from '../../pages/about';

describe('App', () => {
  test('renders a text', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Page')).toBeInTheDocument();
  });
});
