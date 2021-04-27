import Head from 'next/head';
import '../src/utils/axis-interceptor';
import '../styles/globals.scss';

// Global component styles
import '../styles/component-styles.scss';
import { Provider as AuthProvider } from '../src/context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Axis : Loan Against Securities</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
