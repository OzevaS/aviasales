import { useMemo } from 'react';

import { FilterStopsTypes } from '../types/filter';
import { ITicket } from '../types/ticket';

import { useAppSelector } from './useAppSelector';

const getCountTicketStops = (ticket: ITicket): number => {
  return ticket.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
};

export const useTicketFilterStops = (tickets: ITicket[]): ITicket[] => {
  const { stops } = useAppSelector((state) => state.filter);

  const filteredTickets = useMemo(() => {
    let result = Array<ITicket>();

    if (stops.includes(FilterStopsTypes.ALL)) {
      return tickets;
    }
    if (stops.includes(FilterStopsTypes.STOPS_NONE)) {
      result = [
        ...result,
        ...tickets.filter((ticket) => {
          const stopsCount = getCountTicketStops(ticket);
          return stopsCount === 0;
        }),
      ];
    }
    if (stops.includes(FilterStopsTypes.STOPS_ONE)) {
      result = [
        ...result,
        ...tickets.filter((ticket) => {
          const stopsCount = getCountTicketStops(ticket);
          return stopsCount === 1;
        }),
      ];
    }
    if (stops.includes(FilterStopsTypes.STOPS_TWO)) {
      result = [
        ...result,
        ...tickets.filter((ticket) => {
          const stopsCount = getCountTicketStops(ticket);
          return stopsCount === 2;
        }),
      ];
    }
    if (stops.includes(FilterStopsTypes.STOPS_THREE)) {
      result = [
        ...result,
        ...tickets.filter((ticket) => {
          const stopsCount = getCountTicketStops(ticket);
          return stopsCount === 3;
        }),
      ];
    }

    return result;
  }, [stops, tickets]);

  return filteredTickets;
};
