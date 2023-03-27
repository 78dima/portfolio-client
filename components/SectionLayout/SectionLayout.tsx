import React from 'react';

import styles from './SectionLayout.module.scss';

interface Props {
  children: React.ReactNode;
  [key: string]: unknown;
}

const SectionLayout: React.FC<Props> = ({ children, ...props }) => (
  <section className={styles.sectionLayout} {...props}>
    {children}
  </section>
);

export default SectionLayout;
