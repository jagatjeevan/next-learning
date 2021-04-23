import Link from 'next/link';

export default function Home() {
  const handleClick = () => {
    console.log('Button was clicked');
  };

  return (
    <div className="container">
      <h1>Home page of the application</h1>
      Go to <Link href="/about">About page</Link>
      <button type="button" onClick={handleClick}>
        sdfgsdfgsdfg
      </button>
    </div>
  );
}
