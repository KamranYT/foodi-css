import React from "react";
import Image from "next/image";
import styles from "@/styles/AboutUs.module.css";

const teamMembers = [
  {
    name: "Mr Kamran",
    role: "Executive Chef",
    image: "/team1.png",
  },
  {
    name: "Mr Jamshed",
    role: "Head of Operations",
    image: "/team3.png",
  },
  {
    name: "Aliza Rani",
    role: "Pastry Chef",
    image: "/team2.png",
  },
];

const AboutUsPage = () => {
  return (
    <section className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.subHeading}>About Us</h1>
        <h2 className={styles.heading}>Who We Are & Our Passion for Food</h2>
        <p className={styles.description}>
          At Foodi, we are committed to bringing people together over delicious
          meals crafted with love, passion, and expertise. Join us on a culinary
          journey that celebrates taste, quality, and unforgettable moments.
        </p>
      </div>

      {/* Image and Introduction */}
      <div className={styles.introduction}>
        <Image src="/about1.png" alt="About Us Image" width={500} height={400} className={styles.aboutImage} />
        <div className={styles.storyText}>
          <h3 className={styles.storyHeading}>Our Story</h3>
          <p className={styles.storyDescription}>
            Founded in 2015, Foodi began as a small family-owned restaurant with
            one goal: to serve delicious food with exceptional hospitality. Our
            recipes are inspired by traditional flavors while embracing modern
            cooking techniques to create unforgettable meals.
          </p>
          <p className={styles.storyDescription}>
            Over the years, we have grown into a beloved dining destination,
            cherished for our attention to detail, fresh ingredients, and
            commitment to our customers.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className={styles.valuesSection}>
        <h3 className={styles.valuesHeading}>Our Core Values</h3>
        <div className={styles.valuesGrid}>
          <div className={styles.valueItem}>
            <h4 className={styles.valueTitle}>Quality Ingredients</h4>
            <p className={styles.valueDescription}>
              We source the freshest and highest-quality ingredients for every
              dish we prepare.
            </p>
          </div>
          <div className={styles.valueItem}>
            <h4 className={styles.valueTitle}>Exceptional Service</h4>
            <p className={styles.valueDescription}>
              Our team strives to provide warm, welcoming, and attentive service
              to every guest.
            </p>
          </div>
          <div className={styles.valueItem}>
            <h4 className={styles.valueTitle}>Community Focus</h4>
            <p className={styles.valueDescription}>
              We believe in giving back to the community that supports us,
              fostering local connections.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className={styles.teamSection}>
        <h3 className={styles.teamHeading}>Meet Our Team</h3>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className={styles.teamImage}
              />
              <h4 className={styles.teamName}>{member.name}</h4>
              <p className={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;