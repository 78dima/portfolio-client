import React from 'react';

import styles from './Navigate.module.scss';

const Navigate: React.FC = () => (
  <div className={styles.navigate}>
    <ul>
      <li>
        <a href="#section-1">About me</a>
      </li>
      <li>
        <a href="#section-2">What Im good at</a>
      </li>
      <li>
        <a href="#section-3">My works</a>
      </li>
      <li>
        <a href="#section-4">Contact Me</a>
      </li>
    </ul>
  </div>
);

export default Navigate;
