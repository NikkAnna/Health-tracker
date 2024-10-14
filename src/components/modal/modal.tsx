import { ReactElement, SyntheticEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import { CancelIcon } from '../../utils/icons/cancel-icon';
import { CheckIcon } from '../../utils/icons/check-icon';
import { headers, size, TSize } from '../../utils/types';
import cn from 'classnames';
import { useDispatch } from '../../store/store';

import styles from './index.module.css';
import { recodeData } from '../../store/dataSlice';

interface ModalProps {
  header: string;
  onClose: React.Dispatch<React.SetStateAction<string>>;
  size: TSize;
}

const modalRoot = document.getElementById('modals');

export const Modal = (props: ModalProps): ReactElement => {
  const [formValue, setFormValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(recodeData({ value: Number(formValue), name: props.header }));
    props.onClose('');
  };

  return ReactDOM.createPortal(
    <>
      {props.size === size.BIG && (
        <div className={cn(styles.modal, styles.bigModalWrapper)}>
          <h3 className={cn(styles.title, styles.titleBig)}>{props.header}</h3>
          <form
            className={cn(styles.formBig, styles.form)}
            onSubmit={handleSubmit}
          >
            <input
              type='number'
              placeholder='Введите значение...'
              className={styles.input}
              value={formValue}
              onChange={handleInputChange}
            />

            <div className={styles.buttonsBox}>
              <button
                type='button'
                className={styles.button}
                onClick={() => props.onClose('')}
              >
                <CancelIcon />
              </button>
              <button type='submit' className={styles.button}>
                <CheckIcon />
              </button>
            </div>
          </form>
        </div>
      )}

      {props.size === size.SMALL && (
        <div className={cn(styles.modal, styles.smallModalWrapper)}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.titleAndButtonsBox}>
              <h3 className={cn(styles.title, styles.titleSmall)}>
                {props.header}
              </h3>
              <div className={styles.buttonsBox}>
                <button
                  type='button'
                  className={styles.button}
                  onClick={() => props.onClose('')}
                >
                  <CancelIcon />
                </button>
                <button type='submit' className={styles.button}>
                  <CheckIcon />
                </button>
              </div>
            </div>

            <input
              type='number'
              placeholder='Введите значение...'
              className={styles.input}
              value={formValue}
              onChange={handleInputChange}
            />
          </form>
        </div>
      )}
      <div className={styles.modalOverlay} onClick={() => props.onClose('')} />
    </>,
    modalRoot!
  );
};
