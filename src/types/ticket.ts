export interface ResponseTickets {
  data: {
    tickets: Array<ITicket>;
    stop: boolean;
  };
}

export interface TicketsState {
  tickets: Array<ITicket>;
  tickets_view: Array<ITicket>;
  loading: boolean;
  error: string | null;
}

export enum TicketsActionTypes {
  FETCH_TICKETS = 'FETCH_TICKETS',
  FETCH_TICKETS_SUCESS = 'FETCH_TICKETS_SUCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
  SET_TICKETS_VIEW = 'SET_TICKETS_VIEW',
}

export interface FetchTicketsAction {
  type: TicketsActionTypes.FETCH_TICKETS;
  payload: Array<ITicket>;
}

export interface FetchTicketsErrorAction {
  type: TicketsActionTypes.FETCH_TICKETS_ERROR;
  payload: string;
}

export interface FetchTicketsSuccessAction {
  type: TicketsActionTypes.FETCH_TICKETS_SUCESS;
  payload: Array<ITicket>;
}

export interface SetTicketsViewAction {
  type: TicketsActionTypes.SET_TICKETS_VIEW;
  payload: Array<ITicket>;
}

export type TicketsAction =
  | FetchTicketsAction
  | FetchTicketsErrorAction
  | FetchTicketsSuccessAction
  | SetTicketsViewAction;

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
