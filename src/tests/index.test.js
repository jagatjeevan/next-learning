import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '../../pages/about';

describe('App', () => {
  test('renders a text', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Page')).toBeInTheDocument();
  });
});

it('renders a snapshot', () => {
  const tree = renderer.create(<About/>).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});