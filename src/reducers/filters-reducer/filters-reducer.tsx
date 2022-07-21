/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { IFilterAction } from '../../actions/filter-actions/filter-acitons';
import { EFilterStop, TypeFilter } from '../../types';

export interface IFiltersState {
  stop: EFilterStop[];
}

const initailState: IFiltersState = {
  stop: [...Array(EFilterStop.count).keys()],
};

export const getFilterFromType = (filter: IFiltersState, type: TypeFilter) => {
  switch (type) {
    case 'STOP':
      return filter.stop;
    default:
      return [];
  }
};

const reducerFilters = (state = initailState, action: IFilterAction | undefined): IFiltersState => {
  if (!action) return state;

  const { payload } = action;

  switch (payload.type) {
    case 'STOP':
      const { stop } = state;
      const { payload: value } = payload;
      
      let newStop = [...stop];
      if (newStop.includes(value)) {
        newStop = newStop.filter((item) => item !== value);
      } else {
        newStop.push(value);
      }

      const isCheckedAllStops =
        newStop.reduce((acc, item) => {
          if (item !== EFilterStop.all) return acc + 1;
          return acc;
        }, 0) ===
        EFilterStop.count - 1;

      if (value === EFilterStop.all) {
        if (newStop.includes(EFilterStop.all)) {
          newStop = [...Array(EFilterStop.count).keys()];
        } else {
          newStop = [];
        }
      } else if (isCheckedAllStops) {
        newStop = [...Array(EFilterStop.count).keys()];
      } else {
        newStop = newStop.filter((item) => item !== EFilterStop.all);
      }

      return {
        stop: newStop,
      };
    default:
      return state;
  }
};

export default reducerFilters;
