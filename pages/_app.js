import Head from 'next/head';
import '../styles/globals.scss';

// Global component styles
import '../styles/component-styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Axis : Loan Against Securities</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
