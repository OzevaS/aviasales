import { useTicketFilter } from '../../hooks/useTicketFilter';
import { ITicket } from '../../types/ticket';

export const withTicketFilter = (View: any) => {
  return function Wrapper(props: { tickets: ITicket[] }) {
    const { tickets } = props;

    const { filteredTickets } = useTicketFilter(tickets);

    return <View {...props} tickets={filteredTickets} />;
  };
};

export default withTicketFilter;
