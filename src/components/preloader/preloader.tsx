import React from 'react';
import { FadeLoader } from 'react-spinners';
import cn from 'classnames';

import { size, TSize } from '../../utils/types';

import styles from './index.module.css';

type TLoaderProps = {
  size: TSize;
};

export const Preloader = (props: TLoaderProps) => (
  <>
    <div
      className={cn(
        styles.wrapper,
        props.size === size.BIG ? styles.wrapperBig : styles.wrapperSmall
      )}
    >
      <FadeLoader color='#fff' height={8} width={3} margin={-8} />
    </div>
  </>
);
