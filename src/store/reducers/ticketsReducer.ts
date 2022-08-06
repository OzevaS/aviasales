import { TicketsAction, TicketsActionTypes, TicketsState } from '../../types/ticket';

export const initialState: TicketsState = {
  limit: 5,
  countCatched: 0,
  searchId: '',
  tickets: [],
  stop: false,
  loading: false,
  error: null,
};

export const ticketsReducer = (state: TicketsState = initialState, action: TicketsAction): TicketsState => {
  switch (action.type) {
    case TicketsActionTypes.SET_TICKETS_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case TicketsActionTypes.GET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      };
    case TicketsActionTypes.INCREMENT_COUNT_CATCHED:
      return {
        ...state,
        countCatched: state.countCatched + 1,
      };
    case TicketsActionTypes.FETCH_TICKETS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.slice(0).concat(action.payload.tickets),
        stop: action.payload.stop,
        loading: false,
        error: null,
      };
    case TicketsActionTypes.FETCH_ALL_TICKETS_ERROR:
      return {
        ...state,
        error: action.payload,
        stop: true,
        loading: false,
        countCatched: state.countCatched + 1,
      };
    default:
      return state;
  }
};
