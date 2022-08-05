/* eslint-disable import/extensions */
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../store/action-creators';

import { useAppDispatch } from './useAppDispatch';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
