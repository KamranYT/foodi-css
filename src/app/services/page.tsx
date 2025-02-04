"use client";

import React from "react";
import styles from "@/styles/services.module.css";
import { Button } from "@/components/ui/button";
import { FaGift } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiTimer } from "react-icons/bi";
import { LuSalad } from "react-icons/lu";

// Example service data
const services = [
  {
    title: "CATERING",
    description: "Delight your guests with our flavors and presentation",
    icon: <LuSalad size={48} color="#5FE26C" />,
  },
  {
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door",
    icon: <BiTimer size={48} color="#5FE26C" />,
  },
  {
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering",
    icon: <RiShoppingCart2Line size={48} color="#5FE26C" />,
  },
  {
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
    icon: <FaGift size={48} color="#5FE26C" />,
  },
];

const Services = () => {
  return (
    <section className={styles["services-section"]}>
      {/* Left Section */}
      <div className={styles["left-section"]}>
        <h1 className={styles["section-title"]}>OUR STORY & SERVICES</h1>
        <h2 className={styles["section-heading"]}>
          Our Culinary Journey <br /> And Services
        </h2>
        <h3 className={styles["section-description"]}>
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </h3>
        <div>
          <Button className={styles["order-button"]}>
            <span>Order Now</span>
          </Button>
        </div>
      </div>

      {/* Right Section - Service Grid */}
      <div className={styles["service-grid"]}>
        {services.map((service, index) => (
          <div key={index} className={styles["service-card"]}>
            <div className={styles["icon-container"]}>{service.icon}</div>
            <h2 className={styles["service-title"]}>{service.title}</h2>
            <p className={styles["service-description"]}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
