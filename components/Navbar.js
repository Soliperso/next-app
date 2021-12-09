import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <h3>Products List</h3>
      </div>
      <a>Home</a>
      <a>About</a>
      <a>Products Listing</a>
    </nav>
  );
}
