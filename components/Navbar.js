import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.jpeg' width={100} height='60' />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/users'>
        <a>Users Listing</a>
      </Link>
    </nav>
  );
}
