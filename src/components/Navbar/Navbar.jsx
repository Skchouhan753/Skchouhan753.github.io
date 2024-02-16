import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="nav-menu">
      <a id="user-detail-name" className={styles.title} href="/">
        Subhash Kumar Chouhan
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#home" className="nav-link home">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link about">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link skills">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link projects">
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#statisticss" className="nav-link statistics">
              Statistics
            </a>
          </li> */}
          <li>
            <a href="#contact" className="nav-link contact">
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1WH-cvM3w_pkKUWVVDGosUtHSqIvsew51/view?usp=sharing"
              target="_blank"
              className="nav-link resume"  id="resume-link-1"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
