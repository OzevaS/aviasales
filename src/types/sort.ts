export enum SortPriceTypes {
  CHEAPEST = 'cheapest',
  FASTEST = 'fastest',
  OPTIMAL = 'optimal',
}

export interface SortState {
  price: SortPriceTypes;
}

export enum SortActionTypes {
  SET_SORT_PRICE = 'SET_SORT_PRICE',
}

export interface SetSortPriceAction {
  type: SortActionTypes.SET_SORT_PRICE;
  payload: SortPriceTypes;
}

export type SortAction = SetSortPriceAction;
