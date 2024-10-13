export type TCard = {
  name: string;
  value: number[];
  units: string;
  maxValue: number;
  minValue: number;
  allowEdit: boolean;
};

export type ValueOf<T> = T[keyof T];

export const size = {
  BIG: 'Большой размер',
  SMALL: 'Малый размер'
};

export type TSize = ValueOf<typeof size>;

export const nav = {
  PRESSURE: 'Давление',
  PULSE: 'Пульс',
  TEMPERATURE: 'Температура',
  WEATHER: 'Температура на улице',
  GRAFICS: 'Графики'
};

export type TNav = ValueOf<typeof size>;
