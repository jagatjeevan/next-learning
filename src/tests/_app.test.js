import renderer from 'react-test-renderer';
import MyApp from '../../pages/_app';

it('renders a snaps̵hot', () => {
  const tree = renderer.create(<MyApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
