/* eslint-disable import/prefer-default-export */
import { EFilterStop, TypeFilter } from '../../types';

export type TypeFilterAction = EFilterStop;

export interface IFilterAction {
  type: string;
  payload: {
    type: TypeFilter;
    payload: TypeFilterAction;
  };
}

const changeFilters = (type: TypeFilter, filter: TypeFilterAction): IFilterAction => {
  return {
    type: 'FILTER',
    payload: {
      type,
      payload: filter,
    },
  };
};

export { changeFilters };
