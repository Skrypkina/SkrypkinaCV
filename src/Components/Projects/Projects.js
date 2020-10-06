import React from 'react';
import styles from './Projects.module.css';
import bitmedia from '../../images/bitmedia.jpeg';
import reacttest from '../../images/reacttest.jpg';
import imageFinder from '../../images/imageFinder.jpg';
// import kidsLike from '../../images/kidsLike.jpg';
import cards from '../../images/cards.jpg';
import barbarshop from '../../images/barbershop.jpg';

const Projects = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <h4 className={styles.subtitle}>A showcase of design and experiments</h4>
    <div className={styles.imageContainer}>
      <div className={styles.projectContainerFirst}>
        <img src={reacttest} alt="computerImage" className={styles.imgFirst} />
        <div className={styles.overlay}>
          <a
            href="https://skrypkina.github.io/reacttest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.linkFirstTitle}>Online library</h4>
          </a>
          <p className={styles.overlayPar}>
            Technologies used: REACT.js, REDUX, REDUX ASYNC, CSS3
          </p>

          <a
            href="https://skrypkina.github.io/reacttest/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayLink}
          >
            <button className={styles.overlayBtn}> View case study</button>
          </a>
        </div>
      </div>
      <div className={styles.projectContainerSecond}>
        <img
          src={imageFinder}
          alt="computerImage"
          className={styles.imgSecond}
        />
        <div className={styles.overlay}>
          <a
            href="https://skrypkina.github.io/goit-react-hw-03-image-finder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.linkImageTitle}>Image stock</h4>
          </a>
          <p className={styles.overlayParImg}>
            Technologies used: CSS3, REACT.js, HTTP request
          </p>
          <a
            href="https://skrypkina.github.io/goit-react-hw-03-image-finder/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayLink}
          >
            <button className={styles.overlayBtn}> View case study</button>
          </a>
        </div>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <div className={styles.projectContainerSecond}>
        <img src={bitmedia} alt="computerImage" className={styles.imgFirst} />
        <div className={styles.overlay}>
          <a
            href="https://skrypkina.github.io/bitmedia-test/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.linkStatisticTitle}>Statistic charts</h4>
          </a>
          <p className={styles.overlayParStat}>
            Technologies used: CSS3, REACT.js, HTTP request, REACT ROUTER
          </p>
          <a
            href="https://skrypkina.github.io/bitmedia-test/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayLink}
          >
            <button className={styles.overlayBtn}> View case study</button>
          </a>
        </div>
      </div>
      <div className={styles.projectContainerFirst}>
        <img
          src={barbarshop}
          alt="computerImage"
          className={styles.imgSecond}
        />
        <div className={styles.overlay}>
          <a
            href="https://skrypkina.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.linkKidsLikeTitle}>Barbershop</h4>
          </a>
          <p className={styles.overlayPar}>
            Technologies used: WEBPACK, CSS3, HTML5, CORE JS
          </p>
          <a
            href="https://skrypkina.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayLink}
          >
            <button className={styles.overlayBtn}> View case study</button>
          </a>
        </div>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <div className={styles.projectContainerFirst}>
        <img src={cards} alt="computerImage" className={styles.imgFirst} />
        <div className={styles.overlay}>
          <a
            href="https://skrypkina.github.io/limestoneProject/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.linkCardsListTitle}>Card List</h4>
          </a>
          <p className={styles.overlayPar}>
            Technologies used: WEBPACK, CSS3, BOOTSTRAP, HTML5, CORE JS,
            HANDLEBARS.js,HTTP request
          </p>
          <a
            href="https://skrypkina.github.io/limestoneProject/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayLink}
          >
            <button className={styles.overlayBtn}> View case study</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
