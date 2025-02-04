import Image from "next/image";
import styles from "@/styles/reviews.module.css";

const TestimonialSection = () => {
  return (
    <section className={styles.container}>
      {/* Left Side: Image */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/chef.png"
            alt="Best Chef"
            width={506} 
            height={744}
            className={styles.chefImage}
          />
          <div className={styles.greenCircle}></div>
          <div className={styles.yellowCircle}></div>
        </div>
        <div className={styles.badge}>Our Best Chef 😁</div>
      </div>

      {/* Right Side: Text Content */}
      <div className={styles.textContent}>
        <p className={styles.testimonials}>Testimonials</p>
        <h2 className={styles.heading}>What Our Customers <br className={styles.breakLg} /> Say About Us</h2>
        <p className={styles.description}>
          “I had the pleasure of dining at Foodi last night, and 
          <br className={styles.breakSm} />
          I am still raving about the experience! The attention to 
          <br className={styles.breakSm} />
          detail in presentation and service was impeccable.”
        </p>
        <div className={styles.feedbackContainer}>
          <div className={styles.avatarGroup}>
            <Image src="/user1.png" alt="User 1" width={40} height={40} className={styles.avatar} />
            <Image src="/user2.png" alt="User 2" width={40} height={40} className={styles.avatar} />
            <Image src="/user3.png" alt="User 3" width={40} height={40} className={styles.avatar} />
          </div>
          <div className={styles.rating}>
            <p className={styles.feedbackTitle}>Customer Feedback</p>
            <p className={styles.feedbackText}><span className={styles.ratingStar}>⭐ 4.9</span> (18.6k Reviews)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
