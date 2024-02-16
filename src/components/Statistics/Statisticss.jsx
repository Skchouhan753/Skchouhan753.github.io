import React, { useState, useEffect } from "react";
import styles from "./Sta.module.css";
import git2 from "./git2.png";
import language from "./language.png";
import statcard from "./statcard.png";
export const Statisticss = () => {
  return (
    <section className={`${styles.container}`}>
      <h2 className={styles.title}>Statisticss</h2>
      <div className={styles.git}>
        <div>
        <a>
            <img src={git2} />
          </a>
        <a>
            <img id="github-stats-card" src={statcard} />
          </a>
          <a href="https://git.io/streak-stats">
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Skchouhan753&theme=dark"
              alt="GitHub Streak"
            />
          </a>
          <a>
            <img id="github-top-langs" src={language} alt="GitHub Language" />
          </a>
          
        </div>
      </div>
    </section>
  );
};
