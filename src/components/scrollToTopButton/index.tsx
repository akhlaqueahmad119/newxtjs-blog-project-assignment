import React, { useEffect, useState } from "react";
import styles from "./scrollToTopButton.module.scss";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      className={`${styles.scrollToTop} ${isVisible ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      <MdOutlineKeyboardArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
