import React from 'react';
import resume from '../../documents/Larysa_Skrypkina_-_Junior_Front_end_Developer_first.pdf';
// import MyImg from '../../images/IMG-0307.JPG';
import styles from './About.module.css';

const About = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Larysa Skrypkina</h1>
    <h6 className={styles.subtitle}>Junior Front-end developer Kiev </h6>
    <div className={styles.linkContainer}>
      <a
        href={resume}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FCFCFC"
            d="M30.25,13.417V4.333L8.917,4.28L8.75,4.375V44H39.5l0.417-30.75"
          ></path>
          <path
            fill="#CC3333"
            d="M31.075,2.817H7.265v42.367h33.469V12.017L31.075,2.817z M31.837,7.053l4.448,4.237h-4.448V7.053z
                           M9.807,42.641V5.36h19.488v8.473h8.896v28.808H9.807L9.807,42.641z"
          ></path>
        </svg>

        <h4 className={styles.linkTitle}>Resume</h4>
        <h6 className={styles.linkSubtitle}>View Resume</h6>
      </a>
      <a
        className={styles.link}
        href="https://github.com/Skrypkina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <g fill="#C33">
            <path d="M22.583 44.02c.29-1.812.232-8.262.207-10.293l-.027-2.117-1.83 1.064c-.157.09-1.538.96-1.538 3.293 0 .336-.02 5.76-.02 6.503 0 .22-.18.45-.444.657.16-.346.26-.74.26-1.197 0-1.382-.03-4.938-.03-4.938l-.012-1.445-1.428.236c-.01.003-1.033.17-2.47.17-2.733 0-3.828-1.307-4.53-2.8.61.697 1.297 1.304 2.2 1.585.718.223 1.537.34 2.372.34 1.39 0 2.683-.314 3.546-.863l.506-.32.062-.598c.087-.857.738-1.727 1.387-2.258.555-.146 2.62-.39 4.835-.39 2.045 0 2.973.223 3.177.34 1.23.764 1.825 1.566 1.825 5.563 0 2.398-.02 3.54-.033 4.27-.01.498-.016.812-.01 1.19.006.453.12.853.294 1.204-.488-.407-.51-.865-.5-1.033l.007-.14-.08-5.33c.042-.682.05-2.574-.83-3.505-.353-.374-.823-.58-1.32-.58H26.92v9.96c0 .54.084 1.008.213 1.41-.685-.705-.648-2.697-.623-4.154l.008-.417c.027-1.848-.016-5.768-.018-5.934l-.014-1.248-3.287.067.044 1.255c.15 4.1.076 9.05-.303 9.898-.093.203-.217.386-.357.55z"></path>
            <path d="M7.204 28.86c-.21 0-.43.022-.663.064-.757.14-.605.632.05 1.05 1.07.68 2.074 1.53 2.85 3.342.596 1.39 1.85 3.873 5.81 3.873 1.572 0 2.675-.188 2.675-.188s.03 3.548.03 4.927c0 1.59-2.187 2.038-2.187 2.804 0 .3.724.33 1.305.33 1.15 0 3.538-.94 3.538-2.595 0-1.314.022-5.73.022-6.504 0-1.69.922-2.225.922-2.225s.113 9.017-.22 10.228c-.392 1.422-1.1 1.22-1.1 1.854 0 .275.248.41.62.41.9 0 2.534-.783 3.21-2.25.737-1.608.414-10.456.414-10.456l.786-.018s.045 4.05.018 5.902c-.026 1.916-.16 4.34.998 5.484.54.534 1.938 1.353 2.706 1.353.313 0 .522-.138.522-.487 0-.7-1.352-1.275-1.352-3.17v-8.724c1.08 0 .917 2.867.917 2.867l.08 5.33s-.24 1.94 2.138 2.754c.41.14 1.044.23 1.6.23.58 0 1.07-.1 1.115-.348.085-.486-2.16-1.208-2.18-2.71-.013-.918.042-1.453.042-5.44s-.546-5.457-2.443-6.632c-.645-.37-2.165-.507-3.797-.507-2.33 0-4.888.277-5.438.53-.852.636-1.874 1.837-2.014 3.23-.667.422-1.755.67-2.884.67-.68 0-1.378-.09-2.006-.285-2.187-.676-3.114-4.694-6.082-4.694z"></path>
          </g>
          <path
            fill="#FFF"
            stroke="#C33"
            strokeWidth="2.472"
            d="M29.424 29.592c5.855-.59 9.48-2.016 11.248-5.828.137 0 .72-1.78.644-1.78.396-1.44.61-3.144.65-5.16-.01-5.47-2.67-7.403-3.183-8.31.754-4.142-.127-6.026-.535-6.672-1.51-.527-5.252 1.358-7.295 2.686-3.33-.958-10.374-.865-13.015.247-4.872-3.428-7.45-2.905-7.45-2.905s-1.667 2.936-.44 7.23c-1.603 2.01-2.8 3.43-2.8 7.195.002 2.123.257 4.02.83 5.68-.07 0 .768 1.776.792 1.776 1.832 3.27 5.362 5.302 11.32 5.865l9.234-.023z"
          ></path>
        </svg>
        <h4 className={styles.linkTitle}>Github</h4>
        <h6 className={styles.linkSubtitle}>View Repository</h6>
      </a>
      {/* <img className={styles.img} src={MyImg} alt="avatar" /> */}
    </div>
    <p className={styles.par}>
      Though I am a junior front-end developer by day, I have put pen to paper
      during the design process and been completely lost in a full stack
      environment.
    </p>
    <p className={styles.par}>
      I am an alumnus of &nbsp;
      <a
        target="_blank"
        href="https://goit.ua/"
        rel="noopener noreferrer"
        className={styles.linkGoit}
      >
        GoIT
      </a>
      . Originally from Kiev, I'm looking to grow personally and professionally.
    </p>
    <p className={styles.par}>
      I want to be involved in projects that I can be proud of, join an amazing
      team and advance my development career. Take some time to look at my
      projects, and if you're interested in helping me make this happen, let's
      get in touch.
    </p>
  </div>
);

export default About;
