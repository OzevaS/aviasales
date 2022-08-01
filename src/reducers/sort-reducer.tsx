/* eslint-disable @typescript-eslint/default-param-last */
import { SortAction } from '../actions/sort-actions';
import { SortTypes } from '../types/sort';

export interface SortState {
  value: SortTypes;
}

const initailState: SortState = {
  value: SortTypes.cheapest,
};

export const sortReducer = (state = initailState, action: ISortAction | undefined) => {
  if (!action) return state;

  const { value } = action;

  return {
    value,
  };
};