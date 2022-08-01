/* eslint-disable react/no-array-index-key */
import React, { FC, useMemo } from 'react';

import { ITicket } from '../../../types';
import Ticket from '../ticket';

import classNames from './ticket-list.module.scss';

interface TicketListProps {
  tickets: ITicket[];
}

const TicketList: FC<TicketListProps> = ({ tickets }) => {
  const ticketsItems = useMemo(
    () =>
      tickets
        ? tickets.map((ticket, index) => {
            return <Ticket key={index} ticket={ticket} id={index}/>;
          })
        : null,
    [tickets]
  );

  return <ul className={classNames['ticket-list']}>{ticketsItems}</ul>;
};

export default TicketList;
