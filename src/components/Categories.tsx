import React from "react";
import Image from "next/image";
import styles from "@/styles/CategoryGrid.module.css"; // Import CSS module

// Category Item Component
type CategoryProps = {
  title: string;
  description: string;
  imageSrc: string;
  imgWidth: number;
  imgHeight: number;
};

const CategoryItem = ({ title, description, imageSrc, imgWidth, imgHeight }: CategoryProps) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.circleContainer}>
        <Image src={imageSrc} alt={title} width={imgWidth} height={imgHeight} className={styles.image} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

// Main Category Grid Component
const CategoryGrid = () => {
  const categories = [
    { title: "Main Dish", description: "(86 dishes)", imageSrc: "/category1.png", imgWidth: 139, imgHeight: 102 },
    { title: "Breakfast", description: "(12 break fast)", imageSrc: "/category2.png", imgWidth: 110, imgHeight: 72 },
    { title: "Dessert", description: "(48 dessert)", imageSrc: "/category3.png", imgWidth: 111, imgHeight: 98 },
    { title: "Browse All", description: "(255 Items)", imageSrc: "/category4.png", imgWidth: 77, imgHeight: 92 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subheading}>CUSTOMER FAVORITES</p>
        <h2 className={styles.heading}>Popular Categories</h2>
      </div>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;