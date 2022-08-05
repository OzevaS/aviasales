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
    try {
      const { searchId } = getState().tickets;
      if (!searchId) {
        throw new Error('Не удалось получить searchId');
      }

      dispatch({ type: TicketsActionTypes.FETCH_TICKETS });

      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

      dispatch({ type: TicketsActionTypes.FETCH_TICKETS_SUCESS, payload: response.data });

      if (!response.data.stop) {
        setTimeout(() => {
          fetchTickets()(dispatch, getState);
        }, 0);
      }

    } catch (error: any) {
      dispatch({
        type: TicketsActionTypes.FETCH_TICKETS_ERROR,
        payload: new Error(`Произошла ошибка при получении билетов: ${error.message}`),
      });
    }
  };
};

// export const fetchAllTickets = () => {
//   return async (dispatch: Dispatch<TicketsAction>, getState: () => RootState) => {
//     try {
//       const { stop } = getState().tickets;
//       if (stop) {
//         return;
//       }

//       await bindedFetchTickets();

//       setTimeout(() => {
//         console.log('Повторный запрос билетов');
//         fetchAllTickets();
//       }, 0);
//     } catch (error: any) {
//       dispatch({
//         type: TicketsActionTypes.FETCH_TICKETS_ERROR,

//         payload: new Error(`Произошла ошибка при получении билетов: ${error.message}`),
//       });
//     }
//   };
// };

export const setTicketsLimit = (limit: number) => (dispatch: Dispatch) => {
  dispatch({ type: TicketsActionTypes.SET_TICKETS_LIMIT, payload: limit });
};
