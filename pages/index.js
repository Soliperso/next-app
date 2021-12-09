import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className='styles.title'>
      <h1>Homepage</h1>
      <p className='styles.text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum esse pariatur eligendi
        odio dolorem rerum illo quia beatae dolores obcaecati? Illum ab voluptates odit, corporis
        amet voluptatum ratione dolorem, reprehenderit praesentium nihil cupiditate, magni soluta
        corrupti officia quos similique sequi quibusdam non repellat error maiores quo quis. Fuga,
        quisquam nisi.
      </p>
      <p className='styles.text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque magnam reprehenderit
        voluptates quis modi. Tempora a consequatur repellat debitis, alias doloribus? Dolorum rem
        consequuntur maxime, exercitationem saepe iste, placeat aperiam voluptas veniam, numquam
        veritatis commodi dolor accusantium iure porro at.
      </p>
      <Link href='/products'>
        <a className='styles.btn'>See Products Listing</a>
      </Link>
    </div>
  );
}
