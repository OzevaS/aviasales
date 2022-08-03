import { SortAction, SortState, SortPriceTypes } from '../../types/sort';

export const initialState: SortState = {
  price: SortPriceTypes.CHEAPEST,
};

export const sortReducer = (state: SortState = initialState, action: SortAction): SortState => {
  switch (action.type) {
    case 'SET_SORT_PRICE':
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};
