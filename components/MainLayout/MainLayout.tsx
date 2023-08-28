import React from 'react';

import styles from './MainLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => <main id={styles.pageWrapper}>{children}</main>;

export default MainLayout;
