import cn from 'classnames';

import { size, TCardTypes, TSize } from '../../../utils/types';
import { EditIcon } from '../../../utils/icons/edit-icon';

import styles from './index.module.css';

type TEditButtonProps = {
  onClick?: () => void;
  size: TSize;
  cardType: TCardTypes;
};

export const EditButton = (props: TEditButtonProps) => (
  <>
    <button
      type='button'
      onClick={props.onClick}
      className={cn(
        styles.button,
        props.size === size.BIG ? styles.buttonBig : styles.buttonSmall,
        props.cardType === 'weather' ? styles.invisible : ''
      )}
    >
      <EditIcon />
      <p
        className={
          props.size === size.BIG ? styles.buttonTextBig : styles.invisible
        }
      >
        Изменить
      </p>
    </button>
  </>
);
