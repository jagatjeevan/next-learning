import Link from 'next/link';
import { useContext } from 'react';
import { Context as AuthContext } from '../../src/context/AuthContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { username, token } = authContext.state;

  const handleLogin = () => {
    const loginObj = { name: 'Jeevan', token: 'this is a test token', profile: { a: 1, b: 2 } };
    authContext.login(loginObj);
  };

  const getAuthSection = () => {
    if (token) {
      return (
        <button type="button" onClick={authContext.logout}>
          Logout
        </button>
      );
    }
    return (
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    );
  };

  const getUsername = () => {
    if (!token) return null;
    return <h2>Welcome {username}</h2>;
  };

  return (
    <>
      <h1>Login page</h1>
      <Link href="/">Home page</Link>
      {getUsername()}
      {getAuthSection()}
    </>
  );
};

export default Login;
