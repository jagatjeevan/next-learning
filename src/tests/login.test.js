import { act, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Login from '../../pages/login';
import { Provider as AuthContextProvider } from '../Context/AuthContext';

describe('Login', () => {
  it('renders the login page when user is not logged in', () => {
    const authValue = {
      username: '',
      token: null,
      profile: {},
    };
    const login = jest.mock();
    const logout = jest.mock();
    const tree = renderer
      .create(
        <AuthContextProvider value={{ state: authValue, login, logout }}>
          <Login />
        </AuthContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the login page when user is logged in', () => {
    const authValue = {
      username: 'Jeevan',
      token: 'skdjflksjdf',
      profile: {},
    };
    const login = jest.mock();
    const logout = jest.mock();
    const tree = renderer
      .create(
        <AuthContextProvider value={{ state: authValue, login, logout }}>
          <Login />
        </AuthContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('logs in the user on login button click', async () => {
    const authValue = {
      username: '',
      token: null,
      profile: {},
    };
    const login = jest.mock();
    const logout = jest.mock();
    render(
      <AuthContextProvider value={{ state: authValue, login, logout }}>
        <Login />
      </AuthContextProvider>,
    );
    const buttonComponent = screen.getByRole('button');
    expect(buttonComponent).toBeInTheDocument();
    fireEvent.click(buttonComponent);
    act(() => {
      expect(screen.getByText(/Welcome Jeevan/i)).toBeInTheDocument();
    });
  });
});
