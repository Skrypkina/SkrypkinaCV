import React from 'react';
import styles from './Projects.module.css';
import firstImg from '../../images/firstimage.jpg';
import secondImg from '../../images/secondimage.jpg';
import thirdImg from '../../images/thirdimage.jpg';

const Projects = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <h4 className={styles.subtitle}>My pet Projects</h4>
    <h4 className={styles.subtitleNext}>
      I have used JS, React, Redux, HTML5 & CSS3.
    </h4>

    <a
      className={styles.link}
      href="https://skrypkina.github.io/goit-react-hw-03-book-search/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={firstImg} alt="computerImage" className={styles.img} />

      <div className={styles.projectDescriptionFirst}>
        <h4 className={styles.linkTitle}>Book search</h4>
      </div>
    </a>
    <a
      className={styles.link}
      href="https://skrypkina.github.io/goit-react-hw-03-image-finder/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={secondImg} alt="computerImage" className={styles.img} />

      <div className={styles.projectDescriptionSecond}>
        <h4 className={styles.linkTitle}>Image-finder</h4>
      </div>
    </a>
    <a
      className={styles.link}
      href="https://kids-like.goit.co.ua/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={thirdImg} alt="computerImage" className={styles.img} />

      <div className={styles.projectDescriptionThird}>
        <h4 className={styles.linkTitle}>KidsLike</h4>
      </div>
    </a>
  </div>
);

export default Projects;
