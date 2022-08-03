import TicketList from '../../components/logic/ticket-list';
import { withTicketFilter } from '../hoc-helpers/withTicketFilter';

const TicketListWithFilter = withTicketFilter(TicketList);

export default TicketListWithFilter;
