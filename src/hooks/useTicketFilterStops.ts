import { useMemo } from 'react';

import { FilterStopsTypes } from '../types/filter';
import { ITicket } from '../types/ticket';

import { useAppSelector } from './useAppSelector';

export const useTicketFilterStops = (tickets: ITicket[]): { filteredTickets: ITicket[] } => {
  const { stops } = useAppSelector((state) => state.filter);

  const filteredTickets = useMemo(() => {
    let result = Array<ITicket>();

    if (stops.includes(FilterStopsTypes.ALL)) {
      return tickets;
    }
    if (stops.includes(FilterStopsTypes.STOPS_NONE)) {
      result = [...result, ...tickets.filter((ticket) => ticket.stops === 0)];
    }
    if (stops.includes(FilterStopsTypes.STOPS_ONE)) {
      result = [...result, ...tickets.filter((ticket) => ticket.stops === 1)];
    }
    if (stops.includes(FilterStopsTypes.STOPS_TWO)) {
      result = [...result, ...tickets.filter((ticket) => ticket.stops === 2)];
    }
    if (stops.includes(FilterStopsTypes.STOPS_THREE)) {
      result = [...result, ...tickets.filter((ticket) => ticket.stops === 3)];
    }

    return result;
  }, [stops, tickets]);

  return { filteredTickets };
};
