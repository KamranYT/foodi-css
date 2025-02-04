import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Text Section */}
        <div className={styles.textSection}>
          <h1 className={styles.heading}>
            Dive into Delights Of Delectable <span className={styles.highlight}>Food</span>
          </h1>
          <p className={styles.description}>
            Where Each Plate Weaves a Story of Culinary Mastery, Artful
            Creation, and Passionate Craftsmanship.
          </p>
          {/* Button */}
          <div className={styles.buttonWrapper}>
            <Button className={styles.orderButton}>
              <span>Order Now</span>
            </Button>
          </div>
        </div>
        {/* Photo Section */}
        <div className={styles.imageWrapper}>
          <Image
            src="/girl.jpg"
            alt="Person with food"
            width={500}
            height={0}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

/* CSS (Hero.module.css) Update */

