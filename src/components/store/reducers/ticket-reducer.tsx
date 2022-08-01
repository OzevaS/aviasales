import { ITicket } from "../../../types";

interface ITicketState {
    tickets: ITicket[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    tickets: [],
    loading: true,
    error: null,
};

export const ticketReducer = (state: ITicketState = initialState, action: ITicketAction): ITicketState => {
    switch (action.type) {
        case "FETCH_TICKETS":
        return {
            ...state,
            loading: true,
        };
        case 'FETCH_TICKETS_SUCCESS':
        return {
            ...state,
            items: action.payload,
            loading: false,
        };
        case actionTypes.FETCH_TICKETS_FAILURE:
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
        default:
        return state;
    }
    }
}