import React from 'react';
import { Link } from 'react-scroll';

import styles from './Navigate.module.scss';

const Navigate: React.FC = () => (
  <div className={styles.navigate}>
    <ul>
      <li>
        <Link activeClass={styles.active} to="about" spy smooth offset={-50} duration={500}>
          About me
        </Link>
      </li>
      <li>
        <Link activeClass={styles.active} to="goods" spy smooth offset={-50} duration={500}>
          What Im good at
        </Link>
      </li>
      <li>
        <Link activeClass={styles.active} to="works" spy smooth offset={-50} duration={500}>
          My work
        </Link>
      </li>
      <li>
        <Link activeClass={styles.active} to="contact" spy smooth offset={-50} duration={500}>
          Contact Me
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigate;
