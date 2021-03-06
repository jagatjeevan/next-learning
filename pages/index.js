import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const handleClick = () => {
    axios.get('/api/hello').then((res) => console.log(res));
  };

  return (
    <div className="container">
      <h1>Home page of the application</h1>
      Go to
      <ul>
        <li>
          <Link href="/about">About page</Link>
        </li>
        <li>
          <Link href="/login">Login page</Link>
        </li>
      </ul>
      <button type="button" onClick={handleClick}>
        sdfgsdfgsdfg
      </button>
    </div>
  );
}
