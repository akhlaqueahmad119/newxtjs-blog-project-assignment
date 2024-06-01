import React from "react";
import styles from "./HeroBanner.module.scss";
import { Properties } from "csstype";

const HeroBanner = () => {
  const heroBannerStyle: Properties = {
    backgroundImage: `url(images/image1.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className={styles.heroBanner} style={heroBannerStyle}>
      <div className={styles.heroContent}>
        <h2>Inspiration for Travel by Real People</h2>
        <p>Book smart, travel simple</p>
        <button className={styles.heroButton}>Start planning your trip</button>
      </div>
    </section>
  );
};

export default HeroBanner;
