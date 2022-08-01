import AviasalesService from '../../services';

/* eslint-disable import/prefer-default-export */
const aviasalesService = new AviasalesService();

export const REQUEST_TICKETS = 'REQUEST_TICKETS';

export const requestTickets = () => {
  return {
    type: 'TICKETS',
    payload: {
      type: REQUEST_TICKETS,
    },
  };
};

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';

export const receiveTickets = (data: any) => {
  return {
    type: 'TICKETS',
    payload: {
      type: RECEIVE_TICKETS,
      tickets: data.tickets,
      stop: data.stop,
    },
  };
};

export const DID_INVALIDATE = 'DIDINVALIDATE';

export const didInvalidateTickets = () => {
  return {
    type: 'TICKETS',
    payload: {
      type: DID_INVALIDATE,
    },
  };
};

export const fetchTickets = () => {
  return (dispatch: any) => {
    dispatch(requestTickets());
    return aviasalesService
      .getTickets()
      .then((body) => {
        console.log('body', body);
        dispatch(receiveTickets(body));
      })
      .catch((error) => {
        console.log(error);
        didInvalidateTickets();
      });
  };
};
