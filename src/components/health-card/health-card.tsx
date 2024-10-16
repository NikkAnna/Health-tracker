import React from 'react';
import cn from 'classnames';

import { useSelector } from '../../store/store';
import { getErrorSelector, getLoaderSelector } from '../../store/dataSlice';
import { Preloader } from '../preloader/preloader';
import { TCard, TCardTypes, TSize, size } from '../../utils/types';
import { RangeInput } from '../ui/range-input/range-input';
import { EditButton } from '../ui/edit-button/edit-button';

import styles from './index.module.css';

type THealthCardComponent = {
  card: TCard;
  size: TSize;
  onModalOpen?: () => void;
  type?: TCardTypes;
};

export const HealthCard = (props: THealthCardComponent) => {
  const loader = useSelector(getLoaderSelector);
  const error = useSelector(getErrorSelector);

  return (
    <>
      {(props.type === 'not-weather' ||
        (props.type === 'weather' && !loader && error === undefined)) && (
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
                <RangeInput
                  maxValue={props.card.maxValue}
                  minValue={props.card.minValue}
                  value={props.card.value[props.card.value.length - 1]}
                  size={props.size}
                  cardType={props.type}
                />
              </form>
              <EditButton
                onClick={props.onModalOpen}
                size={props.size}
                cardType={props.type}
              />
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
                <EditButton
                  onClick={props.onModalOpen}
                  size={props.size}
                  cardType={props.type}
                />
              </div>
              <div className={styles.smallCardSection}>
                <div className={styles.texboxSmall}>
                  <p className={styles.valueTextSmall}>
                    {props.card.value[props.card.value.length - 1]}
                  </p>
                  <p className={styles.unitsTextSmall}>{props.card.units}</p>
                </div>
                <form>
                  <RangeInput
                    maxValue={props.card.maxValue}
                    minValue={props.card.minValue}
                    value={props.card.value[props.card.value.length - 1]}
                    size={props.size}
                    cardType={props.type}
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
