import { TicketsAction, TicketsActionTypes, TicketsState } from '../../types/ticket';

export const initialState: TicketsState = {
  limit: 5,
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
    case TicketsActionTypes.FETCH_TICKETS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TicketsActionTypes.FETCH_TICKETS_SUCESS:
      return {
        ...state,
        tickets: state.tickets.slice(0).concat(action.payload.tickets),
        stop: action.payload.stop,
        loading: false,
        error: null,
      };
    case TicketsActionTypes.FETCH_TICKETS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
