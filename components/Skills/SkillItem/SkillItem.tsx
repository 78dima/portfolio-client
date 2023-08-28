import Image from 'next/image';
import React from 'react';

import styles from './SkillItem.module.scss';

interface Props {
  title: string;
  description: string;
  image: string;
}

const SkillItem: React.FC<Props> = ({ title, description, image }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillItemHead}>
      <div className={styles.skillImage}>
        <Image src={image} alt={title} width={70} height={70} />
      </div>
      <h4 className={styles.skillTitle}>{title}</h4>
    </div>
    <div className={styles.skillText}>{description}</div>
  </div>
);
export default React.memo(SkillItem);
