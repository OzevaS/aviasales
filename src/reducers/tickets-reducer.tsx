/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { DID_INVALIDATE, RECEIVE_TICKETS, REQUEST_TICKETS } from '../actions/tickets-actions/tickets-actions';
import { Ticket } from '../types/ticket';

export interface ITicketsState {
  items: Ticket[];
  isFetching: boolean;
  didInvalidate: boolean;
}

const initailState: ITicketsState = {
  items: [],
  isFetching: false,
  didInvalidate: false,
};

const reducerTickets = (state = initailState, action: any): ITicketsState => {
  if (!action) return state;

  const { payload } = action;

  switch (payload.type) {
    case REQUEST_TICKETS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_TICKETS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: payload.tickets,
      };
    case DID_INVALIDATE:
      return {
        ...state,
        didInvalidate: true,
        isFetching: false,
      };
    default:
      return state;
  }
};
export default reducerTickets;
