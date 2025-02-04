"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "@/styles/PageTransition.module.css";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname} className={styles["page-transition-container"]}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
          className={styles["page-transition-overlay"]}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
