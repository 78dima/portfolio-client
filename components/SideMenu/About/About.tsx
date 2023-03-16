import React from 'react';

import authorImg from '../assets/about-photo.jpg';
import styles from './About.module.scss';

const About: React.FC = () => (
  <div className={styles.about}>
    <div className={styles.aboutImageWrapper}>
      <img src={authorImg.src} alt="avatar" className={styles.aboutImage} />
    </div>
    <div className={styles.aboutInfo}>
      <h4 className={styles.aboutName}>78dima</h4>
      <div className={styles.aboutSpec}>Front-end developer</div>
    </div>
  </div>
);

export default About;
