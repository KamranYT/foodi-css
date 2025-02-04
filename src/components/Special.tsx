"use client";
import { useState } from "react";
import { FaHeart, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import styles from "@/styles/SpecialDish.module.css"; // Import CSS module

const dishes = [
  { id: 1, name: "Fattoush salad", description: "Description of the item", price: 24.0, rating: 4.9, image: "/salad1.png" },
  { id: 2, name: "Vegetable salad", description: "Description of the item", price: 26.0, rating: 4.6, image: "/salad2.png" },
  { id: 3, name: "Egg vegi salad", description: "Description of the item", price: 23.0, rating: 4.5, image: "/salad3.png" },
  { id: 4, name: "Caesar salad", description: "Description of the item", price: 28.0, rating: 4.7, image: "/salad1.png" },
];

const SpecialDish = () => {
  const [likedDishes, setLikedDishes] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLike = (id: number) => {
    setLikedDishes((prev) =>
      prev.includes(id) ? prev.filter((dishId) => dishId !== id) : [...prev, id]
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? dishes.length - 3 : (prev - 1 + dishes.length) % dishes.length));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles["section-title"]}>Special Dishes</h3>
        <h1 className={styles["main-heading"]}>
          Standout Dishes <br /> From Our Menu
        </h1>
      </div>

      <div className={styles["carousel-container"]}>
        <div className={styles.arrows}>
          <button className={styles["arrow-button"]} onClick={handlePrevious}>
            <FaChevronLeft />
          </button>
          <button className={styles["arrow-button"]} onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.carousel}>
          {dishes.slice(currentIndex, currentIndex + 3).map((dish) => (
            <div className={styles.card} key={dish.id}>
              <Image src={dish.image} alt={dish.name} width={300} height={200} className={styles["custom-class"]} priority />

              <div className={styles["card-content"]}>
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <div className={styles["price-rating"]}>
                  <span className={styles.price}>${dish.price.toFixed(2)}</span>
                  <span className={styles.rating}>
                    {dish.rating} <FaStar color="gold" />
                  </span>
                </div>
              </div>
              <button
                className={`${styles["like-button"]} ${likedDishes.includes(dish.id) ? styles.liked : ""}`}
                onClick={() => toggleLike(dish.id)}
              >
                <FaHeart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialDish;
