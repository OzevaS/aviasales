import { SetSortPriceAction, SortActionTypes, SortPriceTypes } from '../../types/sort';

export const setSortPrice = (sort: SortPriceTypes): SetSortPriceAction => ({
  type: SortActionTypes.SET_SORT_PRICE,
  payload: sort,
});
