import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TCard } from '../utils/types';

import { v4 as uuidv4 } from 'uuid';

export type TCardState = {
  pressure: TCard[];
  pulse: TCard;
  temperature: TCard;
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
      value: [760],
      units: 'мм. рт. ст.',
      maxValue: 800,
      minValue: 650,
      allowEdit: true
    }
  ],
  pulse: {
    name: 'Пульс',
    value: [120],
    units: 'мм. рт. ст.',
    maxValue: 30,
    minValue: 250,
    allowEdit: true
  },
  temperature: {
    name: 'Температура',
    value: [36.6],
    units: 'мм. рт. ст.',
    maxValue: 39.0,
    minValue: 35.0,
    allowEdit: true
  },
  loader: false
};

// export const getAllGamesThunk = createAsyncThunk(
//   'games/getAll',
//   async () => await getGamesApi()
// );


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // getSelectedGames: (
    //   state,
    //   action: PayloadAction<{ date: string; type: string }>
    // ) => {
    //   if (
    //     action.payload.date === 'Все даты' &&
    //     action.payload.type === 'Все игры'
    //   ) {
    //     state.selectedGames = state.games;
    //   } else if (
    //     action.payload.date === 'Все даты' &&
    //     action.payload.type !== 'Все игры'
    //   ) {
    //     state.selectedGames = state.games.filter(
    //       (game) => game.game_kind.name === action.payload.type
    //     );
    //   } else if (
    //     action.payload.date !== 'Все даты' &&
    //     action.payload.type === 'Все игры'
    //   ) {
    //     state.selectedGames = state.games.filter(
    //       (game) => game.start_time === action.payload.date
    //     );
    //   } else if (
    //     action.payload.date !== 'Все даты' &&
    //     action.payload.type !== 'Все игры'
    //   ) {
    //     const selected = state.games.filter(
    //       (game) => game.start_time === action.payload.date
    //     );
    //     state.selectedGames = selected.filter(
    //       (game) => game.game_kind.name === action.payload.type
    //     );
    //   }
    // }

    // getGamesTypes: (state) => {
    //   const types = state.games.map((game) => game.game_kind.name)
    //   state.gameTypes = types.filter((t, index) => types.indexOf(t) === index);
    // }
  },
  selectors: {
    getPressureSelector: (state) => state.pressure,
    getPulseSelector: (state) => state.pulse,
    getTemperatureSelector: (state) => state.temperature,
    // getSelectedGamesSelector: (state) => state.selectedGames,
    // getGamesTypesSelector: (state) => {
    //   const types = state.games.map((game) => game.game_kind.name);
    //   return types.filter((t, index) => types.indexOf(t) === index);
    // },
    // getLoaderSelector: (state) => state.loader
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getAllGamesThunk.pending, (state) => {
  //       state.loader = true;
  //       state.error = '';
  //     })
  //     .addCase(getAllGamesThunk.rejected, (state, action) => {
  //       state.loader = false;
  //       state.error = action.error.message;
  //     })
  //     .addCase(getAllGamesThunk.fulfilled, (state, action) => {
  //       state.loader = false;
  //       state.games = action.payload;
  //     });
  // }
});

export const dataReducer = dataSlice.reducer;
// export const { getSelectedGames } = gamesSlice.actions;
export const {
  getPressureSelector,
  getPulseSelector,
  getTemperatureSelector,
} = dataSlice.selectors;
