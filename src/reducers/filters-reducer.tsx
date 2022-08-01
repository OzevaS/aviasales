/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { FilterAction } from '../actions/filter-actions/filter-acitons';
import { FilterStopTypes, TypeFilter } from '../types/filter';

export interface FiltersState {
  stop: FilterStopTypes[];
}

const initailState: FiltersState = {
  stop: [...Array(FilterStopTypes.count).keys()],
};

export const getFilterFromType = (filter: FiltersState, type: TypeFilter) => {
  switch (type) {
    case 'STOP':
      return filter.stop;
    default:
      return [];
  }
};

export const filtersReducer = (state = initailState, action: IFilterAction | undefined): IFiltersState => {
  if (!action) return state;

  const { payload } = action;

  switch (payload.typeFilter) {
    case 'STOP':
      const { stop } = state;
      const { valueFilter: value } = payload;

      let newStop = [...stop];
      if (newStop.includes(value)) {
        newStop = newStop.filter((item) => item !== value);
      } else {
        newStop.push(value);
      }

      const isCheckedAllStops =
        newStop.reduce((acc, item) => {
          if (item !== FilterStopTypes.all) return acc + 1;
          return acc;
        }, 0) ===
        FilterStopTypes.count - 1;

      if (value === FilterStopTypes.all) {
        if (newStop.includes(FilterStopTypes.all)) {
          newStop = [...Array(FilterStopTypes.count).keys()];
        } else {
          newStop = [];
        }
      } else if (isCheckedAllStops) {
        newStop = [...Array(FilterStopTypes.count).keys()];
      } else {
        newStop = newStop.filter((item) => item !== FilterStopTypes.all);
      }

      return {
        stop: newStop,
      };
    default:
      return state;
  }
};