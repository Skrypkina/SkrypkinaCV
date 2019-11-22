import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Contacts</h2>
    <h4 className={styles.subtitle}>Available for full-time work</h4>
    <h4 className={styles.subtitleNext}>and would love to hear from you</h4>
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
      <p className={styles.text}>
        <span className={styles.textBold}>linkedin</span>:
        linkedin.com/in/larysa-skrypkina
      </p>
    </div>
  </div>
);

export default Contacts;
