import { useState } from 'react';
import { TCard, TNav, TSize, nav, size } from '../../utils/types';
import { HealthCard } from '../health-card/health-card';
import { HealthPage } from '../health-page/health-page';
import cn from 'classnames';

import styles from './index.module.css';
import { NavElement } from '../nav-element/nav-element';
import { Modal } from '../modal/modal';
import { useSelector } from '../../store/store';
import {
  getPressureSelector,
  getPulseSelector,
  getTemperatureSelector
} from '../../store/dataSlice';

const App = () => {
  const [section, setSection] = useState<TNav>(nav.PRESSURE);
  const [visible, setVisible] = useState<TSize>('');

  const pressure = useSelector(getPressureSelector);
  const pulse = useSelector(getPulseSelector);
  const temperature = useSelector(getTemperatureSelector);

  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <NavElement
            name={nav.PRESSURE}
            section={section}
            setSection={setSection}
          />
          <NavElement
            name={nav.PULSE}
            section={section}
            setSection={setSection}
          />
          <NavElement
            name={nav.TEMPERATURE}
            section={section}
            setSection={setSection}
          />
        </ul>
      </nav>
      {section === nav.PRESSURE && (
        <HealthPage
          title='Просмотр и изменение показателей давления'
          childrenSmall={
            <>
              <HealthCard
                card={pressure[0]}
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                }}
              />
              <HealthCard
                card={pressure[1]}
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                }}
              />
            </>
          }
          childrenBig={
            <>
              <HealthCard
                card={pressure[0]}
                size={size.BIG}
                onModalOpen={() => {
                  setVisible(size.BIG);
                }}
              />
              <HealthCard
                card={pressure[1]}
                size={size.BIG}
                onModalOpen={() => {
                  setVisible(size.BIG);
                }}
              />
            </>
          }
        />
      )}
      {visible === size.SMALL && (
        <Modal
          size={size.SMALL}
          onClose={() => {
            setVisible('');
          }}
          header={pressure[0].name}
        />
      )}
      {visible === size.BIG && (
        <Modal
          size={size.BIG}
          onClose={() => {
            setVisible('');
          }}
          header={pressure[1].name}
        />
      )}
    </div>
  );
};

export default App;
