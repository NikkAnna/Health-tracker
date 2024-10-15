import { TCard, TSize, size } from '../../utils/types';
import { EditIcon } from '../../utils/icons/edit-icon';
import cn from 'classnames';

import styles from './index.module.css';
import { useSelector } from '../../store/store';
import { getErrorSelector, getLoaderSelector } from '../../store/dataSlice';
import { Preloader } from '../preloader/preloader';
import { useEffect } from 'react';

type THealthCardComponent = {
  card: TCard;
  size: TSize;
  onModalOpen?: () => void;
  type?: 'weather' | 'not-weather';
};

export const HealthCard = (props: THealthCardComponent) => {
  const loader = useSelector(getLoaderSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {console.log(error)}, [error]) //убрать

  return (
    <>
      {(props.type === 'not-weather' ||
        (props.type === 'weather' && !loader && error === undefined)
        ) && (
        <article>
          {props.size === size.BIG && (
            <div className={cn(styles.bigCardWrapper, styles.card)}>
              <h2 className={cn(styles.title, styles.titleBig)}>
                {props.card.name}
              </h2>
              <div className={styles.textboxBig}>
                <p className={styles.valueTextBig}>
                  {props.card.value[props.card.value.length - 1]}
                </p>
                <p className={styles.unitsTextBig}>{props.card.units}</p>
              </div>
              <form
                className={props.type === 'weather' ? styles.invisible : ''}
              >
                <input
                  type='range'
                  max={props.card.maxValue}
                  min={props.card.minValue}
                  value={props.card.value[props.card.value.length - 1]}
                  step='0.1'
                  className={cn(styles.slider, styles.sliderBig)}
                />
              </form>
              <button
                type='button'
                onClick={props.onModalOpen}
                className={cn(
                  styles.button,
                  styles.buttonBig,
                  props.type === 'weather' ? styles.invisible : ''
                )}
              >
                <EditIcon />
                <p className={styles.buttonTextBig}>Изменить</p>
              </button>
            </div>
          )}

          {props.size === size.SMALL && (
            <div
              className={cn(
                styles.smallCardWrapper,
                styles.card,
                props.type === 'weather' ? styles.weatherWrapper : ''
              )}
            >
              <div className={styles.smallCardSection}>
                <h2 className={cn(styles.title, styles.titleSmall)}>
                  {props.card.name}
                </h2>
                <button
                  type='button'
                  onClick={props.onModalOpen}
                  className={cn(
                    styles.button,
                    styles.buttonSmall,
                    props.type === 'weather' ? styles.invisible : ''
                  )}
                >
                  <EditIcon />
                </button>
              </div>
              <div className={styles.smallCardSection}>
                <div className={styles.texboxSmall}>
                  <p className={styles.valueTextSmall}>
                    {props.card.value[props.card.value.length - 1]}
                  </p>
                  <p className={styles.unitsTextSmall}>{props.card.units}</p>
                </div>
                <form>
                  <input
                    type='range'
                    max={props.card.maxValue}
                    min={props.card.minValue}
                    value={props.card.value[props.card.value.length - 1]}
                    className={cn(
                      styles.slider,
                      styles.sliderSmall,
                      props.type === 'weather' ? styles.invisible : ''
                    )}
                    step='0.1'
                  />
                </form>
              </div>
            </div>
          )}
        </article>
        
      )}
      {props.type === 'weather' && loader && <Preloader size={props.size} />}
      {props.type === 'weather' && error !== undefined && (
        <p>{'Попробуйте обновить страницу позже'}</p>
      )}
    </>
  );
};
