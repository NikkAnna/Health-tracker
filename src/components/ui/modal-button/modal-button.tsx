import React, { ReactElement } from 'react';

import styles from './index.module.css';

type TModalButtonProps = {
  type: 'button' | 'submit';
  onClick?: () => void;
  children: ReactElement;
};

export const ModalButton = (props: TModalButtonProps) => (
  <>
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  </>
);
