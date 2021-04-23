import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './About.module.scss';
import Button from '../../src/components/form_elements/button';

const About = ({ userName }) => {
  const [name, setName] = useState(userName);

  const handleClick = () => {
    axios.get('/api/hello').then((response) => setName(response.data.name));
  };

  const getGreetings = () => (name ? `Welcome ${name}` : null);

  return (
    <div className={`container ${styles.aboutPage}`}>
      {getGreetings()}
      <div>
        <h1>About Page</h1>
        <h2>About Page 2</h2>
      </div>
      Go to
      <Link href="/">Home page</Link>
      <Button type="button" onClick={handleClick}>
        Fetch Data
      </Button>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return {
    props: {
      userName: data.name,
    },
  };
}

export default About;
