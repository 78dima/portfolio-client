import Image from 'next/image';
import React from 'react';

import styles from './SkillItem.module.scss';

interface Props {
  title: string;
  descr: string;
  imageSrc: string;
}

const SkillItem: React.FC<Props> = ({ title, descr, imageSrc }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillItemHead}>
      <div className={styles.skillImage}>
        <Image src={imageSrc} alt="" width={70} height={70} />
      </div>
      <h4 className={styles.skillTitle}>{title}</h4>
    </div>
    <div className={styles.skillText}>{descr}</div>
  </div>
);

export default SkillItem;
