import { faDribbble, faFacebook, faLinkedin, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './Social.module.scss';

const Social: React.FC = () => (
  <div className={styles.social}>
    <ul className={styles.socialIcons}>
      <li>
        <a href="#anchor1">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a href="#anchor2">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="#anchor3">
          <FontAwesomeIcon icon={faDribbble} />
        </a>
      </li>
      <li>
        <a href="#anchor4">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="#anchor5">
          <FontAwesomeIcon icon={faReddit} />
        </a>
      </li>
    </ul>
  </div>
);

export default Social;
