/* eslint-disable import/prefer-default-export */
import { ESort } from '../../types';

export interface ISortAction {
  type: string;
  value: ESort;
}

const changeSort = (value: ESort): ISortAction => {
  return {
    type: 'SORT',
    value,
  };
};

export { changeSort };
