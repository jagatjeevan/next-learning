import { getByTestId, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '../../pages/about';

describe('App', () => {
  test('renders a text with props', () => {
    const { getByText } = render(<About userName="jeevan" />);
    expect(getByText('About Page')).toBeInTheDocument();
    expect(getByText(/Welcome jeevan/)).toBeInTheDocument();
  });

  test('renders a text without props', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Page')).toBeInTheDocument();
  });

  test('renders a snaps̵hot', () => {
    const tree = renderer.create(<About />).toJSON();
    // expect(tree).toMatchSnapshot();
  });

  // test('fetching data', () => {
  //   render(<About />);
  //   const buttonComponent = getByTestId('fetching-data');
  //   console.log(buttonComponent);
  //   expect(buttonComponent).toBeInTheDocument();
  // });
});
