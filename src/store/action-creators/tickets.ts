import { Dispatch } from 'redux';

import { ITicket, TicketsActionTypes } from '../../types/ticket';

export const fetchTickets = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: TicketsActionTypes.FETCH_TICKETS });

    const response = await fetch('https://aviasales-test-api.kata.academy/tickets');
    const tickets: ITicket[] = await response.json();
    dispatch({ type: TicketsActionTypes.FETCH_TICKETS_SUCESS, payload: tickets });
  } catch (error) {
    dispatch({ type: TicketsActionTypes.FETCH_TICKETS_ERROR, payload: 'Произошла ошибка при загрузке билетов' });
  }
};

export const setTicketsView = (tickets: Array<ITicket>) => (dispatch: Dispatch) => {
  dispatch({ type: TicketsActionTypes.SET_TICKETS_VIEW, payload: tickets });
};
