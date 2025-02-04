import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Grid Container */}
        <div className={styles.gridContainer}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <Image
              src="/foodi.png"
              alt="Foodi Logo"
              width={130}
              height={30}
              className="object-contain"
            />
            <p>
              Savor the artistry where <br /> every dish is a culinary <br />{" "}
              masterpiece
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className={styles.sectionTitle}>Useful Links</h2>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  Events
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  Blogs
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Menu Section */}
          <div>
            <h2 className={styles.sectionTitle}>Main Menu</h2>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  Offers
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  Menus
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <ul className={styles.contactList}>
              <li>
                <Link href="mailto:mk7275374@gmail.com" className={styles.link}>
                  mk7275374@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+923313007384" className={styles.link}>
                  +92 331 300 7384
                </Link>
              </li>
              <li>Follow Us:</li>
              {/* Social Media Icons */}
              <div className={styles.socialIcons}>
                <Link href="https://www.facebook.com/profile.php?id=100083043400837">
                  <FaFacebook className={styles.socialIcon} />
                </Link>
                <Link href="#">
                  <FaTwitter className={styles.socialIcon} />
                </Link>
                <Link href="#">
                  <FaInstagram className={styles.socialIcon} />
                </Link>
                <Link href="#">
                  <FaYoutube className={styles.socialIcon} />
                </Link>
              </div>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyright}>
          Copyright &copy; {new Date().getFullYear()} Foodi | All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
