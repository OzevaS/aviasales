/* eslint-disable @typescript-eslint/default-param-last */
import { ESort } from '../../types';

export interface ISortState {
  price_time: ESort;
}

const initailState: ISortState = {
  price_time: ESort.cheapest,
};

const reducerSort = (state = initailState, action: any) => {
  if (!action) return state;
  
  const { payload } = action;

  return {
    price_time: payload,
  };
};

export default reducerSort;
