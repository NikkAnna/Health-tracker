import React, { useEffect, useState } from 'react';

import { NavPanel } from '../nav-panel/nav-panel';
import { MainPage } from '../main-page/main-page';
import { useDispatch } from '../../store/store';
import { getWeatherThunk } from '../../store/dataSlice';
import { TNav, nav } from '../../utils/types';

import styles from './index.module.css';

const App = () => {
  const [section, setSection] = useState<TNav>(nav.PRESSURE);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherThunk());
  }, []);

  return (
    <div className={styles.app}>
      <NavPanel section={section} setSection={setSection} />
      <MainPage section={section} />
    </div>
  );
};

export default App;
