import { useEffect, useMemo, useState } from 'react';
import {
  THeaders,
  TNav,
  TSize,
  chartTypes,
  headers,
  nav,
  pageTitles,
  size
} from '../../utils/types';
import { HealthCard } from '../health-card/health-card';
import { HealthPage } from '../health-page/health-page';
import { NavElement } from '../nav-element/nav-element';
import { Modal } from '../modal/modal';
import { useDispatch, useSelector } from '../../store/store';
import {
  getPressureDDataSelector,
  getPressureSDataSelector,
  getPressureSelector,
  getPulseDataSelector,
  getPulseSelector,
  getTemperatureDataSelector,
  getTemperatureSelector,
  getWeatherSelector,
  getWeatherThunk
} from '../../store/dataSlice';

import styles from './index.module.css';
import { Charts } from '../charts/chart-card';



const App = () => {
  const [section, setSection] = useState<TNav>(nav.PRESSURE);
  const [visible, setVisible] = useState<TSize>('');
  const [modalHeader, setModalHeader] = useState<THeaders>('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherThunk());
  }, []);
  
  const pressure = useSelector(getPressureSelector);
  const pulse = useSelector(getPulseSelector);
  const temperature = useSelector(getTemperatureSelector);
  const pressureDData = useSelector(getPressureDDataSelector);
  const pressureSData = useSelector(getPressureSDataSelector);
  const pulseData = useSelector(getPulseDataSelector);
  const temperatureData = useSelector(getTemperatureDataSelector);
  const weather = useSelector(getWeatherSelector);



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
          <NavElement
            name={nav.WEATHER}
            section={section}
            setSection={setSection}
          />
          <NavElement
            name={nav.CHARTS}
            section={section}
            setSection={setSection}
          />
        </ul>
      </nav>
      {section === nav.PRESSURE && (
        <HealthPage
          title={pageTitles.PRESSURE}
          type='indicators'
          buttonTitles={[size.SMALL, size.BIG]}
          childrenSmall={
            <>
              <HealthCard
                card={pressure[0]}
                type='not-weather'
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                  setModalHeader(headers.PRESSURE_S);
                }}
              />
              <HealthCard
                card={pressure[1]}
                type='not-weather'
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
                type='not-weather'
                size={size.BIG}
                onModalOpen={() => {
                  setVisible(size.BIG);
                  setModalHeader(headers.PRESSURE_S);
                }}
              />
              <HealthCard
                card={pressure[1]}
                type='not-weather'
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
          type='indicators'
          buttonTitles={[size.SMALL, size.BIG]}
          childrenSmall={
            <>
              <HealthCard
                card={pulse}
                type='not-weather'
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
                type='not-weather'
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
          type='indicators'
          buttonTitles={[size.SMALL, size.BIG]}
          childrenSmall={
            <>
              <HealthCard
                card={temperature}
                type='not-weather'
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
                type='not-weather'
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
      {section === nav.WEATHER && (
        <HealthPage
          title={pageTitles.WEATHER}
          type='indicators'
          buttonTitles={[size.SMALL, size.BIG]}
          childrenSmall={
            <>
              <HealthCard card={weather} size={size.SMALL} type='weather'/>
            </>
          }
          childrenBig={
            <>
              <HealthCard card={weather} size={size.BIG} type='weather' />
            </>
          }
        />
      )}
      {section === nav.CHARTS && (
        <HealthPage
          title={pageTitles.CHARTS}
          type='charts'
          buttonTitles={[chartTypes.BAR, chartTypes.LINE]}
          childrenSmall={
            <>
              <Charts
                data={pressureSData}
                title={headers.PRESSURE_S}
                type={chartTypes.BAR}
              />
              <Charts
                data={pressureDData}
                title={headers.PRESSURE_D}
                type={chartTypes.BAR}
              />

              <Charts
                data={pulseData}
                title={headers.PULSE}
                type={chartTypes.BAR}
              />
              <Charts
                data={temperatureData}
                title={headers.TEMPERATURE}
                type={chartTypes.BAR}
              />
            </>
          }
          childrenBig={
            <>
              <Charts
                data={pressureSData}
                title={headers.PRESSURE_S}
                type={chartTypes.LINE}
              />
              <Charts
                data={pressureDData}
                title={headers.PRESSURE_D}
                type={chartTypes.LINE}
              />
              <Charts
                data={pulseData}
                title={headers.PULSE}
                type={chartTypes.LINE}
              />
              <Charts
                data={temperatureData}
                title={headers.TEMPERATURE}
                type={chartTypes.LINE}
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
