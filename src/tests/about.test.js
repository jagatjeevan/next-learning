import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '../../pages/about';

describe('App', () => {
  test('renders a text', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Page')).toBeInTheDocument();
  });

  test('renders a snaps̵hot', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
