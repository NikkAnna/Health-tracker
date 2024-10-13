import { TCard, TSize, size } from '../../utils/types';
import { EditIcon } from '../../utils/icons/edit-icon';
import cn from 'classnames';

import styles from './index.module.css';

type THealthCardComponent = {
  card: TCard;
  size: TSize;
};

export const HealthCard = (props: THealthCardComponent) => {
  const handleChangeValue = () => {};

  return (
    <article>
      {props.size === size.BIG && (
        <div className={cn(styles.bigCardWrapper, styles.card)}>
          <h2 className={cn(styles.title, styles.titleBig)}>
            {props.card.name}
          </h2>
          <div className={styles.textboxBig}>
            <p className={styles.valueTextBig}>{props.card.value}</p>
            <p className={styles.unitsTextBig}>{props.card.units}</p>
          </div>
          <form>
            <input
              type='range'
              max={props.card.maxValue}
              min={props.card.minValue}
              value={props.card.value}
              step='1'
              className={cn(styles.slider, styles.sliderBig)}
            />
          </form>
          <button
            type='button'
            onClick={handleChangeValue}
            className={cn(styles.button, styles.buttonBig)}
          >
            <EditIcon />
            <p className={styles.buttonTextBig}>Изменить</p>
          </button>
        </div>
      )}

      {props.size === size.SMALL && (
        <div className={cn(styles.smallCardWrapper, styles.card)}>
          <div className={styles.smallCardSection}>
            <h2 className={cn(styles.title, styles.titleSmall)}>
              {props.card.name}
            </h2>
            <button
              type='button'
              onClick={handleChangeValue}
              className={cn(styles.button, styles.buttonSmall)}
            >
              <EditIcon />
            </button>
          </div>
          <div className={styles.smallCardSection}>
            <div className={styles.texboxSmall}>
              <p className={styles.valueTextSmall}>{props.card.value}</p>
              <p className={styles.unitsTextSmall}>{props.card.units}</p>
            </div>
            <form>
              <input
                type='range'
                max={props.card.maxValue}
                min={props.card.minValue}
                value={props.card.value}
                className={cn(styles.slider, styles.sliderSmall)}
              />
            </form>
          </div>
        </div>
      )}
    </article>
  );
};
