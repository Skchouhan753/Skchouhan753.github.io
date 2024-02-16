import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title} id="user-detail-name">Hi, I'm Subhash Kumar</h1>
        <p className={styles.description}  id="user-detail-intro">
          I'm a full-stack developer with 1200+ hours of coding experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <span>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
               href="https://drive.google.com/file/d/1WH-cvM3w_pkKUWVVDGosUtHSqIvsew51/view?usp=sharing"
              target="_blank"
              className={`${styles.resumeBtn} nav-link resume`}  id="resume-button-2"
            >
              My Resume
            </a>
        </span>
      </div>
      <img
        src={getImageUrl("hero/heroImage.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
