import React from 'react';
import styles from './TopDestinations.module.scss';

const destinations = [
  { title: 'Dominican Republic', image: '/images/blogCardSquare1.png' },
  { title: 'Maecenas Tincidunt', image: '/images/blogCardSquare2.png' },
  { title: 'Dominican Republic', image: '/images/blogCardSquare3.png' },
  { title: 'Dominican Republic', image: '/images/blogCardSquare4.png' },
  { title: 'Dominican Republic', image: '/images/blogCardSquare5.png' },
];

const TopDestinations: React.FC = () => {
  return (
    <div className={styles.topDestinations}>
      <h2 className={styles.heading}>Top Destinations</h2>
      <p className={styles.subheading}>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</p>
      <div className={styles.grid}>
        {destinations.map((destination, index) => (
          <div key={index} className={styles.card}>
            <img src={destination.image} alt={destination.title} className={styles.image} />
            <div className={styles.overlay}>
              <span className={styles.title}>{destination.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
