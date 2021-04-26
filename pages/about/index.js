import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './About.module.scss';
import Button from '../../src/components/form_elements/button';

const About = ({ userName }) => {
  const [name, setName] = useState(userName);
  const [errorMessage, setErrorMessage] = useState();

  const handleGet = () => {
    axios
      .get('/api/hello')
      .then((response) => {
        setName(response.data.name);
        setErrorMessage(null);
      })
      .catch((error) => setErrorMessage(error));
  };

  const getGreetings = () => (name ? <div>Welcome {name}</div> : null);

  const getErrorMessage = () => (errorMessage ? <div>{errorMessage}</div> : null);

  return (
    <div className={`container ${styles.aboutPage}`}>
      {getGreetings()}
      {getErrorMessage()}
      <div>
        <h1>About Page</h1>
        <h2>About Page 2</h2>
      </div>
      Go to
      <Link href="/">Home page</Link>
      <Button type="button" onClick={handleGet} test-id="fetching-data">
        Fetch Data
      </Button>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/hello', {
    method: 'GET',
  });
  const data = await res.json();

  return {
    props: {
      userName: data.name,
    },
  };
}

export default About;
