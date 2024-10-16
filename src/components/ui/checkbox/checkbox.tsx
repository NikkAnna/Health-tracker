import React from 'react';
import cn from 'classnames';

import styles from './index.module.css';

type TCheckboxProps = {
  active: boolean;
  buttonTitle: string;
  onClick: () => void;
};

export const Checkbox = (props: TCheckboxProps) => (
  <>
    <button
      className={styles.toggleButton}
      type='button'
      onClick={props.onClick}
    >
      <div
        className={cn(
          styles.checkbox,
          props.active ? styles.checkboxActive : ''
        )}
      />
      <p className={styles.buttonText}>{props.buttonTitle}</p>
    </button>
  </>
);
