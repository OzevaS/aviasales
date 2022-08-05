import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import { ticketsReducer } from './ticketsReducer';

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filter: filterReducer,
  sort: sortReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
