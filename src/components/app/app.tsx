import { useState } from 'react';
import { TCard, TNav, TSize, nav, size } from '../../utils/types';
import { HealthCard } from '../health-card/health-card';
import { HealthPage } from '../health-page/health-page';
import cn from 'classnames';

import styles from './index.module.css';
import { NavElement } from '../nav-element/nav-element';
import { Modal } from '../modal/modal';

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
  const [visible, setVisible] = useState<TSize>('');

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
                card={Card}
                size={size.SMALL}
                onModalOpen={() => {
                  setVisible(size.SMALL);
                }}
              />
              <HealthCard
                card={Card2}
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
                card={Card}
                size={size.BIG}
                onModalOpen={() => {
                  setVisible(size.BIG);
                }}
              />
              <HealthCard
                card={Card2}
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
          header={Card.name}
        />
      )}
      {visible === size.BIG && (
        <Modal
          size={size.BIG}
          onClose={() => {
            setVisible('');
          }}
          header={Card.name}
        />
      )}
    </div>
  );
};

export default App;
