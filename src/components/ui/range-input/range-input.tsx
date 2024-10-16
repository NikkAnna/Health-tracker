import React from 'react';
import cn from 'classnames';

import { size, TCardTypes, TSize } from '../../../utils/types';

import styles from './index.module.css';

type TInputProps = {
  maxValue: number;
  minValue: number;
  value: number;
  size: TSize;
  cardType: TCardTypes;
};

export const RangeInput = (props: TInputProps) => (
  <>
    <input
      type='range'
      max={props.maxValue}
      min={props.minValue}
      value={props.value}
      step='0.1'
      className={cn(
        styles.slider,
        props.size === size.BIG ? styles.sliderBig : styles.sliderSmall,
        props.cardType === 'weather' ? styles.invisible : ''
      )}
    />
  </>
);
