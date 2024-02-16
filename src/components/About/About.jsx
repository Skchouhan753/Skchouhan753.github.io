import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={`${styles.container} about section`} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
        style={{marginRight:"10px",borderRadius:"5%"}}
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems} style={{marginLeft: "20px",}}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} className="home-img" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 id="user-detail-intro">I'm a Full Stack Web Developer</h3>
              {/* <p>
                I'm a Full Stack Web Developer 
              </p> */}
            </div>
          </li>

          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Backend Developer</h3> */}
              <p id="user-detail-intro">
                "A Full Stack Web Developer" with a passion for MERN Stack
                development and proficiency in HTML, CSS, JavaScript, React,
                Redux.js, Node.js, Next.js , MongoDB , Express.js, ChakraUI and
                Generative AI is seeking opportunities to work in organizations
                that can challenge their abilities as a web developer. They are
                eager to undertake challenging projects and deliver exceptional
                results.
              </p>
              
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
          <button id="resume-button-2">
          <a
              href="https://drive.google.com/file/d/1WH-cvM3w_pkKUWVVDGosUtHSqIvsew51/view?usp=sharing"
              target="_blank"
              className="resumeBtn"  id="resume-link-2"
            >
              Resume
            </a>
          </button>
          
        </ul>
        
      </div>
    </section>
  );
};
