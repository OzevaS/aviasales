import React, { FC } from 'react';

import { ITicket } from '../../../types';

import classNames from './ticket.module.scss';

interface TicketProps {
  ticket: ITicket;
}

const Ticket: FC<TicketProps> = (props) => {
  const { ticket } = props;
  const { id, price, date, time, transplan, company } = ticket;

  return (
    <li className={classNames.ticket} >
      <div className={classNames.ticket__header}>
        <h3 className={classNames.ticket__price}>{price}</h3>
        <h3 className={classNames.ticket__company}>{company}</h3>
      </div>
      <div className={classNames.ticket__body}>
        <div className={classNames.ticket__date}>
          <p className={classNames.ticket__description}>MOW-HKT</p>
          {date}
        </div>
        <div className={classNames.ticket__time}>
          <p className={classNames.ticket__description}>В пути</p>
          {time}
        </div>
        <div className={classNames.ticket__transplan}>
          <p className={classNames.ticket__description}>{transplan.length} пересадки</p>
          {transplan.join(', ')}
        </div>
      </div>
    </li>
  );
};

export default Ticket;
