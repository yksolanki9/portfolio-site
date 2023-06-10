import * as React from 'react';
import * as styles from '../styles/NavBar.module.css';

export const NavBar = ({isMobileView}: {isMobileView: boolean}) => {
  return (
    <div className={isMobileView ? styles.sidebar : styles.navbar}>
      <div>
        <a href="#about">About</a>
      </div>
      <div>
        <a href="#experience">Experience</a>
      </div>
      <div>
        <a href="#projects">Projects</a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1bqvbs_oy0wBS5U0bQCVIFKId4Gqhp-UA/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}