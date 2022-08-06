export interface ResponseTickets {
  data: {
    tickets: ITicket[];
    stop: boolean;
  };
}

export interface TicketsState {
  limit: number;
  countCatched: number;
  searchId: string;
  tickets: ITicket[];
  stop: boolean;
  loading: boolean;
  error: Error | null;
}

export enum TicketsActionTypes {
  GET_SEARCH_ID = 'GET_SEARCH_ID',
  INCREMENT_COUNT_CATCHED = 'INCREMENT_COUNT_CATCHED',
  FETCH_ALL_TICKETS_ERROR = 'FETCH_ALL_TICKETS_ERROR',
  FETCH_TICKETS = 'FETCH_TICKETS',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  SET_TICKETS_LIMIT = 'SET_TICKETS_LIMIT',
}

export interface GetSearchIdAction {
  type: TicketsActionTypes.GET_SEARCH_ID;
  payload: string;
}

export interface IncrementCountCatchedAction {
  type: TicketsActionTypes.INCREMENT_COUNT_CATCHED;
}

export interface FetchTicketsAction {
  type: TicketsActionTypes.FETCH_TICKETS;
}

export interface FetchAllTicketsErrorAction {
  type: TicketsActionTypes.FETCH_ALL_TICKETS_ERROR;
  payload: Error;
}

export interface FetchTicketsSuccessAction {
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS;
  payload: {
    tickets: ITicket[];
    stop: boolean;
  };
}

export interface SetTicketsLimitAction {
  type: TicketsActionTypes.SET_TICKETS_LIMIT;
  payload: number;
}

export type TicketsAction =
  | GetSearchIdAction
  | IncrementCountCatchedAction
  | FetchTicketsAction
  | FetchAllTicketsErrorAction
  | FetchTicketsSuccessAction
  | SetTicketsLimitAction;

export interface ITicket {
  stops: number;
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}
