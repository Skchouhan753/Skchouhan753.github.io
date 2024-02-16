import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/call.png")} alt="Email icon" />
          <a id="contact-phone">+91-9832854698</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a  id="contact-email">s.k.chouhan753@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a id="contact-linkedin" href="https://www.linkedin.com/in/skchouhan753/">linkedin.com/skchouhan753</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a id="contact-github" href="https://www.github.com/Skchouhan753">github.com/Skchouhan753</a>
        </li>
      </ul>
    </footer>
  );
};
