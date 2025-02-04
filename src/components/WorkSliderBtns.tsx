"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import styles from "@/styles/WorkSliderBtns.module.css"; // Import CSS module

const WorkSliderBtns: React.FC = () => {
  const swiper = useSwiper();

  return (
    <div className={styles["slider-btn-container"]}>
      {/* Previous slide button */}
      <button className={styles["slider-btn"]} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={styles["slider-icon"]} />
      </button>
      {/* Next slide button */}
      <button className={styles["slider-btn"]} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={styles["slider-icon"]} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
