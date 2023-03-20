import React from 'react';

import styles from './Button.module.scss';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
  children: React.ReactNode;
  [key: string]: unknown;
}
const Button: React.FC<Props> = ({ ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={styles.button} {...props}>
    {props.children}
  </button>
);

export default Button;
