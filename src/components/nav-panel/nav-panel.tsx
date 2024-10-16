import React from 'react';
import { NavElement } from '../nav-element/nav-element';
import { nav, TNav } from '../../utils/types';

import styles from './index.module.css';

type TNavPanelProps = {
  section: TNav;
  setSection: React.Dispatch<React.SetStateAction<string>>;
};

export const NavPanel = (props: TNavPanelProps) => (
  <>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <NavElement
          name={nav.PRESSURE}
          section={props.section}
          setSection={props.setSection}
        />
        <NavElement
          name={nav.PULSE}
          section={props.section}
          setSection={props.setSection}
        />
        <NavElement
          name={nav.TEMPERATURE}
          section={props.section}
          setSection={props.setSection}
        />
        <NavElement
          name={nav.WEATHER}
          section={props.section}
          setSection={props.setSection}
        />
        <NavElement
          name={nav.CHARTS}
          section={props.section}
          setSection={props.setSection}
        />
      </ul>
    </nav>
  </>
);
