/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/default-param-last */
import { ITicketsAction } from '../../actions/tickets-actions/tickets-actions';
import { ITicket } from '../../types';

export interface ITicketsState {
  tickets: ITicket[];
}

const initailState: ITicketsState = {
  tickets: [],
};

const reducerTickets = (state = initailState, action: ITicketsAction): ITicketsState => {
  if (!action) return state;

  const { payload } = action;

  switch (payload.type) {
    case 'SET_TICKETS':
      const { payload: tickets } = payload;
      return {
        tickets,
      };
    default:
      return state;
  }
};
export default reducerTickets;
