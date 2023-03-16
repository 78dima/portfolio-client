import React from 'react';

import styles from './SectionInfo.module.scss';

interface Props {
  title: string;
  descr: string;
}

const SectionInfo: React.FC<Props> = ({ title, descr }) => (
  <div className={styles.sectionInfo}>
    <h2 className={styles.sectionInfoTitle}>{title}</h2>
    <div className={styles.sectionInfoDescr}>{descr}</div>
  </div>
);

export default SectionInfo;
