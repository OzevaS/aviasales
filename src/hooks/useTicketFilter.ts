import { ITicket } from '../types/ticket';

import { useTicketFilterStops } from './useTicketFilterStops';

export const useTicketFilter = (tickets: ITicket[]): ITicket[]  => {
  const filteredTickets  = useTicketFilterStops(tickets);

  return  filteredTickets ;
};
