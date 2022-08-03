import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { ticketsAPI } from '../../services/TicketService';

import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import { ticketsReducer } from './ticketsReducer';

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  [ticketsAPI.reducerPath]: ticketsAPI.reducer,
  filter: filterReducer,
  sort: sortReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
