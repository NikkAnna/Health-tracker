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

export type TNav = ValueOf<typeof nav>;

export const headers = {
  PRESSURE_S: 'Систолическое давление',
  PRESSURE_D: 'Диастолическое давление',
  PULSE: 'Пульс',
  TEMPERATURE: 'Температура',
  WEATHER: 'Температура на улице'
};

export type THeaders = ValueOf<typeof headers>;

export const pageTitles = {
  PRESSURE: 'Просмотр и изменение показателей давления',
  PULSE: 'Просмотр и изменение показателей пульса',
  TEMPERATURE: 'Просмотр и изменение показателей температуры',
  WEATHER: 'Просмотр и изменение показателея температуры на улице'
};

export type TPageTitles = ValueOf<typeof pageTitles>;
