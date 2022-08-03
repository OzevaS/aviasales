import { TicketsAction, TicketsActionTypes, TicketsState } from '../../types/ticket';

export const initialState: TicketsState = {
  tickets: [],
  tickets_view: [],
  loading: false,
  error: null,
};

export const ticketsReducer = (state: TicketsState = initialState, action: TicketsAction): TicketsState => {
  switch (action.type) {
    case TicketsActionTypes.FETCH_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        tickets_view: action.payload,
        loading: false,
        error: null,
      };
    case TicketsActionTypes.SET_TICKETS_VIEW:
      return {
        ...state,
        tickets_view: action.payload,
      };
    case TicketsActionTypes.FETCH_TICKETS_SUCESS:
      return {
        ...state,
        tickets: action.payload,
        tickets_view: action.payload,
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
