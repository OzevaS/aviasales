import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { ticketReducer } from './reducers/ticket-reducer';

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;