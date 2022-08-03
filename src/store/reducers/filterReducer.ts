/* eslint-disable no-case-declarations */
import { FilterState, FilterAction, FilterActionTypes, FilterStopsTypes } from '../../types/filter';

export const initialState: FilterState = {
  stops: [],
};

export const filterReducer = (state: FilterState = initialState, action: FilterAction): FilterState => {
  const { stops } = state;

  switch (action.type) {
    case FilterActionTypes.ADD_FILTER_STOP:
      if (action.payload === FilterStopsTypes.ALL)
        return {
          ...state,
          stops: [...Object.keys(FilterStopsTypes).map((key) => key as FilterStopsTypes)],
        };

      return {
        ...state,
        stops: [...stops, action.payload],
      };
    case FilterActionTypes.REMOVE_FILTER_STOP:
      if (action.payload === FilterStopsTypes.ALL)
        return {
          ...state,
          stops: [],
        };

      return {
        ...state,
        stops: state.stops.filter((stop) => stop !== action.payload && stop !== FilterStopsTypes.ALL),
      };
    default:
      return state;
  }
};
