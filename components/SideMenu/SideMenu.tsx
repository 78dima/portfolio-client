import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { useState } from 'react';

import About from '@/components/SideMenu/About/About';
import Navigate from '@/components/SideMenu/Navigate/Navigate';
import Social from '@/components/SideMenu/Social/Social';

import styles from './SideMenu.module.scss';

const SideMenu: React.FC = () => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const onTriggerButton = () => {
    setTrigger(!trigger);
  };
  return (
    <div className={styles.sideMenu}>
      <button type="button" className={styles.menuOpenButton} onClick={onTriggerButton}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={clsx(styles.sideMenuWrapper, trigger && styles.sideMenuClose)}>
        <button type="button" className={styles.menuCloseButton} onClick={onTriggerButton}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <About />
        <Navigate />
        <Social />
        <div className={styles.sideMenuCopyright}>Dumitru Romanenco</div>
      </div>
    </div>
  );
};

export default SideMenu;
