import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose, isError, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={clsx(styles.modalOverlay, isError && styles.modalOverlayError)}>
      <div className={styles.modalContent}>
        {children}
        <button type="button" onClick={onClose}>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
