import React from 'react';

import styles from './MainLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => (
  <div id={styles.pageWrapper}>
    <main>{children}</main>
  </div>
);

export default MainLayout;
