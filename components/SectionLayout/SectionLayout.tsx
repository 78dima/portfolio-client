import React from 'react';

import styles from './SectionLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const SectionLayout: React.FC<Props> = ({ children }) => <section className={styles.sectionLayout}>{children}</section>;

export default SectionLayout;
