import React from 'react';

import About from '@/components/SideMenu/About/About';
import Navigate from '@/components/SideMenu/Navigate/Navigate';
import Social from '@/components/SideMenu/Social/Social';

import styles from './SideMenu.module.scss';

const SideMenu: React.FC = () => (
  <div className={styles.sideMenuWrapper}>
    <About />
    <Navigate />
    <Social />
    <div className={styles.sideMenuCopyright}>Copyright 2019 Reflux Design</div>
  </div>
);

export default SideMenu;
