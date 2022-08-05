import { useMemo } from 'react';

import { SortPriceTypes } from '../types/sort';
import { ITicket } from '../types/ticket';

import { useAppSelector } from './useAppSelector';

export const useTicketSortPrice = (tickets: ITicket[]): ITicket[] => {
  const { price } = useAppSelector((state) => state.sort);

  const sortedTickets = useMemo(() => {
    switch (price) {
      case SortPriceTypes.CHEAPEST:
        return [...tickets].sort((a, b) => a.price - b.price);
      case SortPriceTypes.FASTEST:
        return [...tickets].sort((a, b) => {
          const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
          const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
          return aDuration - bDuration;
        });
      case SortPriceTypes.OPTIMAL:
        return [...tickets].sort((a, b) => a.price - b.price);
      default:
        return tickets;
    }
  }, [price, tickets]);

  return sortedTickets;
};
