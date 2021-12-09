import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <h3>Products List</h3>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/products'>
        <a>Products Listing</a>
      </Link>
    </nav>
  );
}
