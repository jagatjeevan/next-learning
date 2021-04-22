import axios from 'axios';
import Link from 'next/link';

const About = () => {
  const handleClick = () => {
    axios.get('/api/hello').then((response) => response.data.name);
  };
  return (
    <div>
      <div>
        <h1>About Page</h1>
        <h2>About Page 2</h2>
      </div>
      Go to <Link href="/">Home page</Link>
      <div>
        <button type="button" onClick={handleClick}>
          Fetch data
        </button>
      </div>
    </div>
  );
};
export default About;
