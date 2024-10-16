import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import { size, TSize } from '../../utils/types';
import { Checkbox } from '../ui/checkbox/checkbox';

import styles from './index.module.css';

type THealthPageProps = {
  title: string;
  type: 'indicators' | 'charts';
  buttonTitles: string[];
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
    <section
      className={props.type === 'indicators' ? styles.page : styles.pageCharts}
    >
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.buttonWrapper}>
        <Checkbox
          active={smallFade}
          buttonTitle={props.buttonTitles[0]}
          onClick={() => {
            setCardSize(size.SMALL);
            setBigFade(false);
            setSmallFade(true);
          }}
        />
        <Checkbox
          active={bigFade}
          buttonTitle={props.buttonTitles[1]}
          onClick={() => {
            setCardSize(size.BIG);
            setSmallFade(false);
            setBigFade(true);
          }}
        />
      </div>
      <div>
        <Transition nodeRef={nodeRef} in={smallFade} timeout={duration}>
          {(state) => (
            <div
              ref={nodeRef}
              className={
                props.type === 'indicators'
                  ? styles.widgetSmall
                  : styles.widgetCharts
              }
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
              className={
                props.type === 'indicators'
                  ? styles.widgetSmall
                  : styles.widgetCharts
              }
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
