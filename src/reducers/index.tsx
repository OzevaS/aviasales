/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { ITicket } from '../types';

import reducerFilters, { IFiltersState } from './filters-reducer';
import reducerSort, { ISortState } from './sort-reducer';

export interface IStateReducer {
  filters: IFiltersState;
  sorts: ISortState;
  tickets: ITicket[];
}

const initailState: IStateReducer = {
  filters: reducerFilters(undefined, undefined),
  sorts: reducerSort(undefined, undefined),
  tickets: [],
};

const reducer = (state = initailState, action: any) => {
  switch (action.type) {
    case 'FILTER':
      const s = {
        ...state,
        filters: reducerFilters(state.filters, action),
      };
      return s;
    case 'SORT':
      return {
        ...state,
        sorts: reducerSort(state.sorts, action),
      };
    default:
      return initailState;
  }
};

export default reducer;
