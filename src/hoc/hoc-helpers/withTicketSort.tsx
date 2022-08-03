import { useTicketSort } from '../../hooks/useTicketSort';
import { ITicket } from '../../types/ticket';

export const withTicketSort = (View: any) => {
  return function Wrapper(props: { tickets: ITicket[] }) {
    const { tickets } = props;

    const { sortedTickets } = useTicketSort(tickets);

    return <View {...props} tickets={sortedTickets} />;
  };
};

export default withTicketSort;
