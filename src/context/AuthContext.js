import { createContext } from '../utils/create-context';

const auth = {
  username: '',
  token: null,
  profile: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return { username: '', token: null, profile: {} };
    case 'LOGIN':
      return {
        username: action.payload.name,
        token: action.payload.token,
        profile: action.payload.profile,
      };
    default:
      return { ...state };
  }
};

const logout = (dispatch) => () => dispatch({ type: 'LOGOUT' });
const login = (dispatch) => (loginObj) => dispatch({ type: 'LOGIN', payload: loginObj });

export const { Context, Provider } = createContext(reducer, { logout, login }, auth);
