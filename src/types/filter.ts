export enum FilterStopsTypes {
  ALL = 'ALL',
  STOPS_NONE = 'STOPS_NONE',
  STOPS_ONE = 'STOPS_ONE',
  STOPS_TWO = 'STOPS_TWO',
  STOPS_THREE = 'STOPS_THREE',
}

export interface FilterState {
  stops: Array<FilterStopsTypes>;
}

export enum FilterActionTypes {
  ADD_FILTER_STOP = 'ADD_FILTER_STOP',
  REMOVE_FILTER_STOP = 'REMOVE_FILTER_STOP',
}

export interface AddFilterStopAction {
  type: FilterActionTypes.ADD_FILTER_STOP;
  payload: FilterStopsTypes;
}

export interface RemoveFilterStopAction {
  type: FilterActionTypes.REMOVE_FILTER_STOP;
  payload: FilterStopsTypes;
}

export type FilterAction = AddFilterStopAction | RemoveFilterStopAction;

export type FilterTypes = FilterStopsTypes;
