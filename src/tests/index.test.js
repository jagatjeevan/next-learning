import renderer from 'react-test-renderer';
import Home from '../../pages/index';

it('renders a snaps̵hot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
