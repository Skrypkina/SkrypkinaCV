import React from 'react';
import avatar from '../../images/IMG-0458 (1).JPG';
import styles from './Contacts.module.css';

const Contacts = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Contacts</h2>
    <h4 className={styles.subtitle}>Available for full-time work</h4>
    <h4 className={styles.subtitleNext}>and would love to hear from you</h4>

    <img className={styles.img} src={avatar} alt="avatar" />
    <div className={styles.textContainer}>
      <p className={styles.text}>
        <span className={styles.textBold}>Email</span>:
        larysa.skrypkin@gmail.com
      </p>
      <p className={styles.text}>Kiev, Ukraine</p>
      <p className={styles.text}>
        <span className={styles.textBold}>Phone</span>: +38 099 120 98 73
      </p>
      <p className={styles.text}>
        <span className={styles.textBold}>Skype</span>: Larysa_sk
      </p>
      <p className={styles.textLink}>
        <a
          className={styles.parLinkedin}
          href="https://www.linkedin.com/in/larysa-skrypkina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </a>
      </p>
    </div>
  </div>
);

export default Contacts;
