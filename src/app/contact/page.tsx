"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import styles from "@/styles/Contact.module.css"; // Import the custom CSS module

const ContactPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Left Section: Contact Information */}
        <div className={styles.leftSection}>
          <h1>Get in Touch</h1>
          <h2>Contact Us</h2>
          <p>
            Have any questions or feedback? Reach out to us using the form or
            through our contact details below.
          </p>
          {/* Contact Details */}
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <p className={styles.contactText}>+92 (331) 300-7384</p>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <p className={styles.contactText}>support@foodi.com</p>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <p className={styles.contactText}>
                123 Food Street, Foodi City, FC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className={styles.formContainer}>
          <h3>Send Us a Message</h3>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                className={`${styles.inputField} ${styles.textareaField}`}
              ></textarea>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.submitButton}>
                <span>Send Message</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
