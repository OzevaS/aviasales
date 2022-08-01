/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { combineReducers } from 'redux';
import { ticketReducer } from '../components/store/reducers/ticket-reducer';

import {filtersReducer, FiltersState } from './filters-reducer';
import {sortReducer, SortState } from './sort-reducer';
import reducerTickets, { TicketsState } from './tickets-reducer';

export interface IStateReducer {
  filters: FiltersState;
  sort: SortState;
  tickets: TicketsState;
}

const reducer = combineReducers({
  tickets: ticketReducer,
  filter: filtersReducer,
  sort: sortReducer
})

export default reducer;
