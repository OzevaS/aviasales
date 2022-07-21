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
        ? tickets.map((ticket) => {
            return <Ticket key={ticket.id} ticket={ticket} />;
          })
        : null,
    [tickets]
  );

  return <ul className={classNames['ticket-list']}>{ticketsItems}</ul>;
};

export default TicketList;
