import { faGoogle, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './Social.module.scss';

const Social: React.FC = () => (
  <div className={styles.social}>
    <ul className={styles.socialIcons}>
      <li>
        <a href="http://www.linkedin.com/in/78dima">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://t.me/libarate_78">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </li>
      <li>
        <a href="mailto:7878dima7878@gmail.com">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </li>
    </ul>
  </div>
);

export default Social;
