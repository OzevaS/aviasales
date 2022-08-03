import TicketList from '../../components/logic/ticket-list';
import withTicketFilter from '../hoc-helpers/withTicketFilter';
import { withTicketSort } from "../hoc-helpers/withTicketSort";


const TicketListWithFilterAndSort = withTicketSort(withTicketFilter(TicketList));

export default TicketListWithFilterAndSort;