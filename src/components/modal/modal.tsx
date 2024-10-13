import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { CancelIcon } from '../../utils/icons/cancel-icon';
import { CheckIcon } from '../../utils/icons/check-icon';
import { size, TSize } from '../../utils/types';
import cn from 'classnames';

import styles from './index.module.css';

interface ModalProps {
  header: string;
  onClose: () => void;
  size: TSize;
}

const modalRoot = document.getElementById('modals');

export const Modal = (props: ModalProps): ReactElement =>
  ReactDOM.createPortal(
    <>
      {props.size === size.BIG && (
        <div className={cn(styles.modal, styles.bigModalWrapper)}>
          <h3 className={cn(styles.title, styles.titleBig)}>{props.header}</h3>
          <form className={styles.form}>
            <input
              type='number'
              placeholder='Введите значение...'
              className={styles.input}
            />
          </form>
          <div className={styles.buttonsBox}>
            <button type='button' className={styles.button}>
              <CancelIcon />
            </button>
            <button type='button' className={styles.button}>
              <CheckIcon />
            </button>
          </div>
        </div>
      )}

      {props.size === size.SMALL && (
        <div className={cn(styles.modal, styles.smallModalWrapper)}>
          <div className={styles.titleAndButtonsBox}>
            <h3 className={cn(styles.title, styles.titleSmall)}>
              {props.header}
            </h3>
            <button type='button' className={styles.button}>
              <CancelIcon />
            </button>
            <button type='button' className={styles.button}>
              <CheckIcon />
            </button>
          </div>
          <form className={styles.form}>
            <input
              type='number'
              placeholder='Введите значение...'
              className={styles.input}
            />
          </form>
        </div>
      )}
      <div className={styles.modalOverlay} onClick={props.onClose} />
    </>,
    modalRoot!
  );
