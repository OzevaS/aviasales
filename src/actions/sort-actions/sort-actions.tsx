/* eslint-disable import/prefer-default-export */
import { ESort } from '../../types';

export interface ISortAction {
  type: string;
  payload: ESort;
}

const changeSort = (filter: ESort): ISortAction => {
  return {
    type: 'SORT',
    payload: filter,
  };
};

export { changeSort };
