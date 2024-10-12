import { useState } from 'react';
import { TCard, TNav, nav, size } from '../../utils/types';
import { HealthCard } from '../health-card/health-card';
import { HealthPage } from '../health-page/health-page';
import cn from 'classnames';

import styles from './index.module.css';

const Card: TCard = {
  name: 'Диастолическое давление',
  value: 125,
  units: 'мм. рт. ст.',
  maxValue: 350,
  minValue: 50,
  allowEdit: true
};

const Card2: TCard = {
  name: 'Систолическое давление',
  value: 125,
  units: 'мм. рт. ст.',
  maxValue: 350,
  minValue: 50,
  allowEdit: true
};

const App = () => {
  const [section, setSection] = useState<TNav>(nav.PRESSURE);

  const handlePressure = () => {
    setSection(nav.PRESSURE);
  };

  const handlePulse = () => {
    setSection(nav.PULSE);
  };

  const handleTemperature = () => {
    setSection(nav.TEMPERATURE);
  };

  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <p
          className={cn(
            styles.navElement,
            section === nav.PRESSURE ? styles.active : ''
          )}
          onClick={handlePressure}
        >
          <a href='#'>{nav.PRESSURE}</a>
        </p>
        <p
          className={cn(
            styles.navElement,
            section === nav.PULSE ? styles.active : ''
          )}
          onClick={handlePulse}
        >
          <a href='#'>{nav.PULSE}</a>
        </p>
        <p
          className={cn(
            styles.navElement,
            section === nav.TEMPERATURE ? styles.active : ''
          )}
          onClick={handleTemperature}
        >
          <a href='#'>{nav.TEMPERATURE}</a>
        </p>
      </nav>
      {section === nav.PRESSURE && (
        <HealthPage
          title='Просмотр и изменение показателей давления'
          childrenSmall={
            <>
              <HealthCard card={Card} size={size.SMALL} />
              <HealthCard card={Card2} size={size.SMALL} />
            </>
          }
          childrenBig={
            <>
              <HealthCard card={Card} size={size.BIG} />
              <HealthCard card={Card2} size={size.BIG} />
            </>
          }
        />
      )}
    </div>
  );
};

export default App;
