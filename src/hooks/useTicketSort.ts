import { ITicket } from '../types/ticket';

import { useTicketSortPrice } from './useTicketSortPrice';

export const useTicketSort = (tickets: ITicket[]): ITicket[] => {
  const sortedTickets = useTicketSortPrice(tickets);

  return sortedTickets;
};
