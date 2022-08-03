import * as TicketsActions from './tickets';
import * as FiltersActions from './filters';
import * as SortActions from './sort';

export default {
  ...TicketsActions,
  ...FiltersActions,
  ...SortActions,
};
