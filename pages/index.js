import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home page of the application</h1>
      Go to <Link href="/about">About page</Link>
    </>
  );
}
