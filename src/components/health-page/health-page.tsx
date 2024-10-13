import { ReactElement, useState } from 'react';
import { size, TSize } from '../../utils/types';
import cn from 'classnames';

import styles from './index.module.css';

type THealthPageProps = {
  title: string;
  childrenBig: ReactElement;
  childrenSmall: ReactElement;
};

export const HealthPage = (props: THealthPageProps) => {
  const [cardSize, setCardSize] = useState<TSize>(size.SMALL);

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.toggleButton}
          type='button'
          onClick={() => {
            setCardSize(size.SMALL);
          }}
        >
          <div
            className={cn(
              styles.checkbox,
              cardSize === size.SMALL ? styles.checkboxActive : ''
            )}
          />
          <p className={styles.buttonText}>{size.SMALL}</p>
        </button>
        <button
          className={styles.toggleButton}
          type='button'
          onClick={() => {
            setCardSize(size.BIG);
          }}
        >
          <div
            className={cn(
              styles.checkbox,
              cardSize === size.BIG ? styles.checkboxActive : ''
            )}
          />
          <p className={styles.buttonText}>{size.BIG}</p>
        </button>
      </div>
      <div
        className={
          cardSize === size.BIG ? styles.widgetBig : styles.widgetSmall
        }
      >
        {cardSize === size.SMALL && <>{props.childrenSmall}</>}
        {cardSize === size.BIG && <>{props.childrenBig}</>}
      </div>
    </section>
  );
};
