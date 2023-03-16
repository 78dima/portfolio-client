import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './MyWorkItem.module.scss';

interface Props {
  title: string;
  descr: string;
  imageSrc: string;
}

const MyWorkItem: React.FC<Props> = ({ title, descr, imageSrc }) => (
  <div className={styles.myWorkItem}>
    <figure>
      <img src={imageSrc} alt="" />
      <figcaption>
        <a href="/">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <h4>{title}</h4>
        <span>{descr}</span>
      </figcaption>
    </figure>
  </div>
);

export default MyWorkItem;
