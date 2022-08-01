/* eslint-disable import/prefer-default-export */
import { EFilterStop, TypeFilter } from '../../types';

export type TypeFilterValue = EFilterStop;

export interface IFilterAction {
  type: string;
  payload: {
    typeFilter: TypeFilter;
    valueFilter: TypeFilterValue;
  };
}

const changeFilters = (typeFilter: TypeFilter, filter: TypeFilterValue): IFilterAction => {
  return {
    type: 'FILTER',
    payload: {
      typeFilter,
      valueFilter: filter,
    },
  };
};

export { changeFilters };
