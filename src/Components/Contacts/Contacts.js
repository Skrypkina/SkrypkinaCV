import React from 'react';
import cardPhoto from '../../images/cardPhoto.jpg';
import styles from './Contacts.module.css';

const Contacts = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Contacts</h2>
    <h4 className={styles.subtitle}>Available for full-time work</h4>
    <h4 className={styles.subtitleNext}>and would love to hear from you</h4>

    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img src={cardPhoto} alt="myPhoto" className={styles.img} />
      </div>
      <p className={styles.cardParagraph}>
        <span className={styles.purple}>const </span>
        aboutMe
        <span className={styles.cyan}> =</span>
        <span> &#123;</span>
        <br />
        <span className={styles.red}>location</span>
        <span className={styles.cyan}>:</span>{' '}
        <span className={styles.green}>'Kiev Ukraine'</span>,
        <br />
        <span className={styles.red}>email</span>
        <span className={styles.cyan}>:</span>
        <span className={styles.green}>'larysa.skrypkin@gmail.com'</span>,
        <br />
        <span className={styles.red}>phone</span>
        <span className={styles.cyan}>:</span>
        <span className={styles.green}>+38099-120-98-73</span>,
        <br />
        <span className={styles.red}>skype</span>
        <span className={styles.cyan}>:</span>
        <span className={styles.green}>'Larysa_sk'</span>,
        <br />
        <span className={styles.red}>linkedIn</span>
        <span className={styles.cyan}>:</span>
        <span className={styles.green}>
          <a
            className={styles.parLinkedin}
            href="https://www.linkedin.com/in/larysa-skrypkina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            'linkedIn'
          </a>
        </span>
        <br />
        <span> &#125;&#59;</span>
        <br />
      </p>
    </div>
  </div>
);

export default Contacts;
