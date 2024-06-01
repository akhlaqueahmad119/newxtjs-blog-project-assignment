import React from 'react';
import styles from './Hero.module.scss';
import { Properties } from "csstype";

const Hero: React.FC = () => {
    const heroBannerStyle: Properties = {
        backgroundImage: `url(images/image.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
  return (
    <div className={styles.hero}  style={heroBannerStyle}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.tag}>Travel</span>
          <h1 className={styles.title}>Richird Norton photorealistic rendering as real photos</h1>
          <p className={styles.description}>
            Progressively incentivize cooperative systems through technically sound functionalities. The credibly productive seamless data.
          </p>
          <button className={styles.button}>Start planning your trip</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
