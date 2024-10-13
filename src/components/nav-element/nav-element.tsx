import cn from 'classnames';
import { TNav } from '../../utils/types';

import styles from './index.module.css';

type TNavElementProps = {
  name: TNav;
  section: TNav;
  setSection: React.Dispatch<React.SetStateAction<string>>;
};

export const NavElement = (props: TNavElementProps) => (
  <li>
    <p
      className={cn(
        styles.navElement,
        props.section === props.name ? styles.active : ''
      )}
      onClick={() => {
        props.setSection(props.name);
      }}
    >
      <a href='#'>{props.name}</a>
    </p>
  </li>
);
