import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import {
  chartTypes,
  TChartData,
  TChartTypes,
  THeaders
} from '../../utils/types';

import styles from './index.module.css';

type TChartsProps = {
  title: THeaders;
  data: TChartData[];
  type: TChartTypes;
};

export const Charts = (props: TChartsProps) => (
  <>
    {props.type === chartTypes.BAR && (
      <article className={styles.chartWrapper}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.bar}>
          <ResponsiveContainer width='96%' height='80%'>
            <BarChart data={props.data}>
              <XAxis dataKey='name' />
              <YAxis dataKey='value' className={styles.yAxis} />
              <Tooltip contentStyle={{ fontSize: '11px' }} />
              <Bar dataKey='value' fill='#FF7E1D' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    )}
    {props.type === chartTypes.LINE && (
      <article className={styles.chartWrapper}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.bar}>
          <ResponsiveContainer width='96%' height='80%'>
            <AreaChart data={props.data}>
              <defs>
                <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#FF7E1D' stopOpacity={0.7} />
                  <stop offset='95%' stopColor='#FF7E1D' stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey='name' />
              <YAxis dataKey='value' className={styles.yAxis} />
              <Tooltip contentStyle={{ fontSize: '11px' }} />
              <Area
                type='monotone'
                dataKey='value'
                stroke='#FF7E1D'
                fillOpacity={1}
                fill='url(#color)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </article>
    )}
  </>
);
