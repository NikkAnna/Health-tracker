import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TCard, TChartData, TResponseType } from '../utils/types';

const axios = require('axios');
axios.defaults.baseURL = `https://api.openweathermap.org/data/2.5`;

export type TCardState = {
  pressure: TCard[];
  pressureSData: TChartData[];
  pressureDData: TChartData[];
  pulse: TCard;
  pulseData: TChartData[];
  temperature: TCard;
  temperatureData: TChartData[];
  weather: TCard;
  loader: boolean;
  error?: string;
};

export const initialState: TCardState = {
  pressure: [
    {
      name: 'Систолическое давление',
      value: [760, 750],
      units: 'мм. рт. ст.',
      maxValue: 800,
      minValue: 650,
      allowEdit: true
    },
    {
      name: 'Диастолическое давление',
      value: [780, 20],
      units: 'мм. рт. ст.',
      maxValue: 800,
      minValue: 650,
      allowEdit: true
    }
  ],
  pressureSData: [
    { name: '', value: 760 },
    { name: '', value: 750 }
  ],
  pressureDData: [
    { name: '', value: 780 },
    { name: '', value: 20 }
  ],
  pulse: {
    name: 'Пульс',
    value: [120, 130],
    units: 'уд./мин.',
    maxValue: 250,
    minValue: 40,
    allowEdit: true
  },
  pulseData: [
    { name: '', value: 120 },
    { name: '', value: 130 }
  ],
  temperature: {
    name: 'Температура',
    value: [36.6, 35],
    units: '°С',
    maxValue: 39.0,
    minValue: 35.0,
    allowEdit: true
  },
  temperatureData: [
    { name: '', value: 36.6 },
    { name: '', value: 35 }
  ],
  weather: {
    name: 'Температура на улице',
    value: [],
    units: '°С',
    maxValue: -50,
    minValue: 50,
    allowEdit: true
  },
  loader: false,
  error: undefined
};

export const getWeatherThunk = createAsyncThunk('weather/get', async () => {
  try {
    const weatherResponse = await axios.get('weather', {
      params: {
        lat: 55.45,
        lon: 37.36,
        units: 'metric',
        appid: '5cb5e057589c63ddf516a401f662020d'
      }
    });
    return weatherResponse as TResponseType;
  } catch (err) {
    throw err;
  }
});

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
    getTemperatureDataSelector: (state) => state.temperatureData,
    getWeatherSelector: (state) => state.weather,
    getLoaderSelector: (state) => state.loader,
    getErrorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherThunk.pending, (state) => {
        state.loader = true;
        state.error = undefined;
      })
      .addCase(getWeatherThunk.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(getWeatherThunk.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload) {
          const weather = action.payload.data.main.temp.toFixed(1);
          const weatherNumber = parseFloat(weather);
          state.weather.value.push(weatherNumber);
        }
      });
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
  getTemperatureDataSelector,
  getWeatherSelector,
  getLoaderSelector,
  getErrorSelector
} = dataSlice.selectors;
