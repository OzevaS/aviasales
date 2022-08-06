/* eslint-disable react/no-array-index-key */
import React, { FC, useMemo } from 'react';

import { ITicket } from '../../../types/ticket';
import Ticket from '../ticket';

import classNames from './ticket-list.module.scss';

interface TicketListProps {
  data: ITicket[];
  style: React.CSSProperties | undefined;
}

const TicketList: FC<TicketListProps> = ({ data, style }) => {
  const ticketsItems = useMemo(
    () =>
      data
        ? data.map((ticket, index) => {
            return <Ticket key={index} ticket={ticket} id={index} />;
          })
        : null,
    [data]
  );

  return <ul style={style} className={classNames['ticket-list']}>{ticketsItems}</ul>;
};

export default TicketList;
