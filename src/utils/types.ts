export type TCard = {
  name: string;
  value: number;
  units: string;
  maxValue: number;
  minValue: number;
  allowEdit: boolean;
};

export type ValueOf<T> = T[keyof T];

export type TSize = ValueOf<typeof size>;

export const size = {
  BIG: 'big',
  SMALL: 'small'
};
