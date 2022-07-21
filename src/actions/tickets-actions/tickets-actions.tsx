/* eslint-disable import/prefer-default-export */
import { ITicket } from '../../types';

export type TypeTicketsAction = 'SET_TICKETS';

export interface ITicketsAction {
  type: string;
  payload: {
    type: TypeTicketsAction;
    payload: Array<ITicket>;
  };
}

const changeTickets = (tickets: Array<ITicket>): ITicketsAction => {
  return {
    type: 'TICKETS',
    payload: {
      type: 'SET_TICKETS',
      payload: tickets,
    },
  };
};

export { changeTickets };
