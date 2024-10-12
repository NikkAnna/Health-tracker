import { TCard, size } from '../../utils/types';
import { HealthCard } from '../health-card/health-card';

import styles from './index.module.css';

const Card: TCard = {
  name: 'Диастолическое давление',
  value: 125,
  units: 'мм. рт. ст.',
  maxValue: 350,
  minValue: 50,
  allowEdit: true
};

const App = () => (
  <div className={styles.app}>
  </div>
);

export default App;
