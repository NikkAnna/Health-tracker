import React, {
  ReactElement,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { useDispatch } from '../../store/store';
import { recodeData } from '../../store/dataSlice';
import { CancelIcon } from '../../utils/icons/cancel-icon';
import { CheckIcon } from '../../utils/icons/check-icon';
import { size, TSize } from '../../utils/types';
import { ModalInput } from '../ui/modal-input/modal-input';
import { ModalButton } from '../ui/modal-button/modal-button';

import styles from './index.module.css';

interface ModalProps {
  header: string;
  onClose: React.Dispatch<React.SetStateAction<string>>;
  size: TSize;
}

export const Modal = (props: ModalProps): ReactElement => {
  const [formValue, setFormValue] = useState('');
  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();

  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#modals');
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (formValue) {
      dispatch(recodeData({ value: Number(formValue), name: props.header }));
      props.onClose('');
    }
  };

  return (
    <>
      {mounted && ref.current
        ? createPortal(
            <>
              {props.size === size.BIG && (
                <div className={cn(styles.modal, styles.bigModalWrapper)}>
                  <h3 className={cn(styles.title, styles.titleBig)}>
                    {props.header}
                  </h3>
                  <form
                    className={cn(styles.formBig, styles.form)}
                    onSubmit={handleSubmit}
                  >
                    <ModalInput
                      value={formValue}
                      onChange={handleInputChange}
                    />
                    <div className={styles.buttonsBox}>
                      <ModalButton
                        type='button'
                        onClick={() => props.onClose('')}
                        children={<CancelIcon />}
                      />
                      <ModalButton type='submit' children={<CheckIcon />} />
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
                        <ModalButton
                          type='button'
                          onClick={() => props.onClose('')}
                          children={<CancelIcon />}
                        />
                        <ModalButton type='submit' children={<CheckIcon />} />
                      </div>
                    </div>
                    <ModalInput
                      value={formValue}
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
              )}
              <div
                className={styles.modalOverlay}
                onClick={() => props.onClose('')}
              />
            </>,
            ref.current
          )
        : null}
    </>
  );
};
