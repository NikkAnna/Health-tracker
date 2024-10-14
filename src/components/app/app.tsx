import { useState } from 'react';
import {
  THeaders,
  TNav,
  TSize,
  headers,
  nav,
  pageTitles,
  size
} from '../../utils/types';
import { HealthCard } from '../health-card/health-card';
import { HealthPage } from '../health-page/health-page';
import { NavElement } from '../nav-element/nav-element';
import { Modal } from '../modal/modal';
import { useSelector } from '../../store/store';
import {
  getPressureSelector,
  getPulseSelector,
  getTemperatureSelector
} from '../../store/dataSlice';
import cn from 'classnames';

import styles from './index.module.css';

const App = () => {
  const [section, setSection] = useState<TNav>(nav.PRESSURE);
  const [visible, setVisible] = useState<TSize>('');
  const [modalHeader, setModalHeader] = useState<THeaders>('');

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
          title={pageTitles.PRESSURE}
          childrenSmall={
            <>
              <HealthCard
                card={pressure[0]}
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                  setModalHeader(headers.PRESSURE_S);
                }}
              />
              <HealthCard
                card={pressure[1]}
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                  setModalHeader(headers.PRESSURE_D);
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
                  setModalHeader(headers.PRESSURE_S);
                }}
              />
              <HealthCard
                card={pressure[1]}
                size={size.BIG}
                onModalOpen={() => {
                  setVisible(size.BIG);
                  setModalHeader(headers.PRESSURE_D);
                }}
              />
            </>
          }
        />
      )}
      {section === nav.PULSE && (
        <HealthPage
          title={pageTitles.PULSE}
          childrenSmall={
            <>
              <HealthCard
                card={pulse}
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                  setModalHeader(headers.PULSE);
                }}
              />
            </>
          }
          childrenBig={
            <>
              <HealthCard
                card={pulse}
                size={size.BIG}
                onModalOpen={() => {
                  setVisible(size.BIG);
                  setModalHeader(headers.PULSE);
                }}
              />
            </>
          }
        />
      )}
      {section === nav.TEMPERATURE && (
        <HealthPage
          title={pageTitles.TEMPERATURE}
          childrenSmall={
            <>
              <HealthCard
                card={temperature}
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                  setModalHeader(headers.TEMPERATURE);
                }}
              />
            </>
          }
          childrenBig={
            <>
              <HealthCard
                card={temperature}
                size={size.BIG}
                onModalOpen={() => {
                  setVisible(size.BIG);
                  setModalHeader(headers.TEMPERATURE);
                }}
              />
            </>
          }
        />
      )}
      {visible === size.SMALL && (
        <Modal size={size.SMALL} onClose={setVisible} header={modalHeader} />
      )}
      {visible === size.BIG && (
        <Modal size={size.BIG} onClose={setVisible} header={modalHeader} />
      )}
    </div>
  );
};

export default App;
