import Image from 'next/image';
import React from 'react';

import styles from './MyWorkItem.module.scss';

interface Props {
  title: string;
  link: string;
  imageSrc: string;
}

const MyWorkItem: React.FC<Props> = ({ title, link, imageSrc }) => (
  <div className={styles.myWorkItem}>
    <figure>
      <Image src={`/${imageSrc}`} alt={title} layout="fill" objectFit="cover" />
      <figcaption>
        <h4>{title}</h4>
        <a href={link}>Link</a>
      </figcaption>
    </figure>
  </div>
);

export default React.memo(MyWorkItem);
