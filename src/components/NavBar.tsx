import * as React from "react";
import * as styles from "../styles/NavBar.module.css";
import { useInView } from "react-intersection-observer";

export const NavBar = ({
  isMobileView,
  setIsMenuOpen,
}: {
  isMobileView: boolean;
  setIsMenuOpen: Function;
}) => {
  const { inView, ref } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`${isMobileView ? styles.sidebar : styles.navbar} ${
        isMobileView && inView ? styles.showSidebar : styles.hideSidebar
      } ${!isMobileView && inView ? styles.showNavbar : styles.hideNavbar}`}
    >
      <div onClick={() => setIsMenuOpen(false)}>
        <a href="#about">About</a>
      </div>
      <div onClick={() => setIsMenuOpen(false)}>
        <a href="#experience">Experience</a>
      </div>
      <div onClick={() => setIsMenuOpen(false)}>
        <a href="#projects">Projects</a>
      </div>
      <div onClick={() => setIsMenuOpen(false)}>
        <a
          href="https://drive.google.com/file/d/1bqvbs_oy0wBS5U0bQCVIFKId4Gqhp-UA/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div onClick={() => setIsMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};
