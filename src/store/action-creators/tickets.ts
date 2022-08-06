import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { TicketsAction, TicketsActionTypes } from '../../types/ticket';
import { RootState } from '../reducers';

export const getSearchId = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get('https://aviasales-test-api.kata.academy/search');
    const { searchId } = response.data;

    localStorage.setItem('searchId', searchId);
    dispatch({ type: TicketsActionTypes.GET_SEARCH_ID, payload: searchId });
  };
};

export const fetchTickets = () => {
  return async (dispatch: Dispatch<TicketsAction>, getState: () => RootState) => {
    const { countCatched } = getState().tickets;

    try {
      const { searchId } = getState().tickets;
      if (!searchId) {
        throw new Error('Не удалось получить searchId');
      }

      dispatch({ type: TicketsActionTypes.FETCH_TICKETS });

      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

      dispatch({ type: TicketsActionTypes.FETCH_TICKETS_SUCCESS, payload: response.data });

      if (!response.data.stop) {
        setTimeout(() => {
          fetchTickets()(dispatch, getState);
        }, 0);
      }
    } catch (error: any) {
      if (countCatched < 5) {
        fetchTickets()(dispatch, getState);
        dispatch({ type: TicketsActionTypes.INCREMENT_COUNT_CATCHED });
      } else {
        dispatch({
          type: TicketsActionTypes.FETCH_ALL_TICKETS_ERROR,
          payload: new Error(`Не удалось получить все билеты: ${error.message}`),
        });
      }
    }
  };
};

export const setTicketsLimit = (limit: number) => (dispatch: Dispatch) => {
  dispatch({ type: TicketsActionTypes.SET_TICKETS_LIMIT, payload: limit });
};
