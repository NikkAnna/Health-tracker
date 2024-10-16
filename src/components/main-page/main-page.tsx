import React, { useState } from 'react';

import { HealthPage } from '../health-page/health-page';
import { HealthCard } from '../health-card/health-card';
import { Charts } from '../charts/chart-card';
import { Modal } from '../modal/modal';
import { useSelector } from '../../store/store';
import {
  getPressureDDataSelector,
  getPressureSDataSelector,
  getPressureSelector,
  getPulseDataSelector,
  getPulseSelector,
  getTemperatureDataSelector,
  getTemperatureSelector,
  getWeatherSelector
} from '../../store/dataSlice';
import {
  chartTypes,
  headers,
  nav,
  pageTitles,
  size,
  THeaders,
  TNav,
  TSize
} from '../../utils/types';

type TMainPageProps = {
  section: TNav;
};

export const MainPage = (props: TMainPageProps) => {
  const [visible, setVisible] = useState<TSize>('');
  const [modalHeader, setModalHeader] = useState<THeaders>('');

  const pressure = useSelector(getPressureSelector);
  const pulse = useSelector(getPulseSelector);
  const temperature = useSelector(getTemperatureSelector);
  const pressureDData = useSelector(getPressureDDataSelector);
  const pressureSData = useSelector(getPressureSDataSelector);
  const pulseData = useSelector(getPulseDataSelector);
  const temperatureData = useSelector(getTemperatureDataSelector);
  const weather = useSelector(getWeatherSelector);

  return (
    <>
      {props.section === nav.PRESSURE && (
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
      {props.section === nav.PULSE && (
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
      {props.section === nav.TEMPERATURE && (
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
      {props.section === nav.WEATHER && (
        <HealthPage
          title={pageTitles.WEATHER}
          type='indicators'
          buttonTitles={[size.SMALL, size.BIG]}
          childrenSmall={
            <>
              <HealthCard card={weather} size={size.SMALL} type='weather' />
            </>
          }
          childrenBig={
            <>
              <HealthCard card={weather} size={size.BIG} type='weather' />
            </>
          }
        />
      )}
      {props.section === nav.CHARTS && (
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
    </>
  );
};
