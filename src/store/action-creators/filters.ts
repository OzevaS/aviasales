import { FilterActionTypes, FilterStopsTypes, AddFilterStopAction, RemoveFilterStopAction } from '../../types/filter';

export const addFilterStop = (filter: FilterStopsTypes): AddFilterStopAction => ({
  type: FilterActionTypes.ADD_FILTER_STOP,
  payload: filter,
});

export const removeFilterStop = (filter: FilterStopsTypes): RemoveFilterStopAction => ({
  type: FilterActionTypes.REMOVE_FILTER_STOP,
  payload: filter,
});
