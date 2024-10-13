import { ReactElement, useEffect, useRef, useState } from 'react';
import { size, TSize } from '../../utils/types';
import cn from 'classnames';
import { Transition } from 'react-transition-group';

import styles from './index.module.css';

type THealthPageProps = {
  title: string;
  childrenBig: ReactElement;
  childrenSmall: ReactElement;
};

export const HealthPage = (props: THealthPageProps) => {
  const [cardSize, setCardSize] = useState<TSize>(size.SMALL);
  const nodeRef = useRef(null);

  const [smallFade, setSmallFade] = useState<boolean>(false);
  const [bigFade, setBigFade] = useState<boolean>(false);

  useEffect(() => {
    setSmallFade(true);
  }, []);

  const duration = 600;

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.toggleButton}
          type='button'
          onClick={() => {
            setCardSize(size.SMALL);
            setBigFade(false);
            setSmallFade(true);
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
            setSmallFade(false);
            setBigFade(true);
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
      <div>
        <Transition nodeRef={nodeRef} in={smallFade} timeout={duration}>
          {(state) => (
            <div
              ref={nodeRef}
              className={styles.widgetSmall}
              style={{
                ...transitionStyles[state]
              }}
            >
              {cardSize === size.SMALL && <>{props.childrenSmall}</>}
            </div>
          )}
        </Transition>
        <Transition nodeRef={nodeRef} in={bigFade} timeout={duration}>
          {(state) => (
            <div
              ref={nodeRef}
              className={styles.widgetBig}
              style={{
                ...transitionStyles[state]
              }}
            >
              {cardSize === size.BIG && <>{props.childrenBig}</>}
            </div>
          )}
        </Transition>
      </div>
    </section>
  );
};
