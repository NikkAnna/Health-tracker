import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCard, TChartData } from '../utils/types';

export type TCardState = {
  pressure: TCard[];
  pressureSData: TChartData[];
  pressureDData: TChartData[];
  pulse: TCard;
  pulseData: TChartData[];
  temperature: TCard;
  temperatureData: TChartData[];
  loader: boolean;
};

export const initialState: TCardState = {
  pressure: [
    {
      name: 'Систолическое давление',
      value: [760],
      units: 'мм. рт. ст.',
      maxValue: 800,
      minValue: 650,
      allowEdit: true
    },
    {
      name: 'Диастолическое давление',
      value: [0],
      units: 'мм. рт. ст.',
      maxValue: 800,
      minValue: 650,
      allowEdit: true
    }
  ],
  pressureSData: [{ name: '', value: 760 }],
  pressureDData: [{ name: '', value: 760 }],
  pulse: {
    name: 'Пульс',
    value: [120],
    units: 'уд./мин.',
    maxValue: 250,
    minValue: 40,
    allowEdit: true
  },
  pulseData: [{ name: '', value: 120 }],
  temperature: {
    name: 'Температура',
    value: [36.6],
    units: '°С',
    maxValue: 39.0,
    minValue: 35.0,
    allowEdit: true
  },
  temperatureData: [{ name: '', value: 36.6 }],
  loader: false
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    recodeData: (
      state,
      action: PayloadAction<{ value: number; name: string }>
    ) => {
      switch (action.payload.name) {
        case 'Систолическое давление':
          state.pressure[0].value.push(action.payload.value);
          state.pressureSData.push({ name: '', value: action.payload.value });
          break;
        case 'Диастолическое давление':
          state.pressure[1].value.push(action.payload.value);
          state.pressureDData.push({ name: '', value: action.payload.value });
          break;
        case 'Пульс':
          state.pulse.value.push(action.payload.value);
          state.pulseData.push({ name: '', value: action.payload.value });
          break;
        case 'Температура':
          state.temperature.value.push(action.payload.value);
          state.temperatureData.push({ name: '', value: action.payload.value });
          break;
      }
    }
  },
  selectors: {
    getPressureSelector: (state) => state.pressure,
    getPulseSelector: (state) => state.pulse,
    getTemperatureSelector: (state) => state.temperature,
    getPressureDDataSelector: (state) => state.pressureDData,
    getPressureSDataSelector: (state) => state.pressureSData,
    getPulseDataSelector: (state) => state.pulseData,
    getTemperatureDataSelector: (state) => state.temperatureData
  }
});

export const dataReducer = dataSlice.reducer;
export const { recodeData } = dataSlice.actions;
export const {
  getPressureSelector,
  getPulseSelector,
  getTemperatureSelector,
  getPressureDDataSelector,
  getPressureSDataSelector,
  getPulseDataSelector,
  getTemperatureDataSelector
} = dataSlice.selectors;
