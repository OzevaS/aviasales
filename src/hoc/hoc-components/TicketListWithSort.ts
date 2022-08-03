import TicketList from '../../components/logic/ticket-list';
import { withTicketSort } from "../hoc-helpers/withTicketSort";

const TicketListWithSort = withTicketSort(TicketList);

export default TicketListWithSort;
