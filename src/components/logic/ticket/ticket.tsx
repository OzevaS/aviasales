/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react';
import { addSeconds } from 'date-fns';

import { ITicket } from '../../../types/ticket';

import classNames from './ticket.module.scss';

function getNextFormatTime(date: Date, addMinutes: number) {
  const nextDate = addSeconds(date, addMinutes);
  const hours = nextDate.getHours();
  const minutes = nextDate.getMinutes();
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function getFormatTime(time: string, addMinutes: number) {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const first = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  const second = getNextFormatTime(date, addMinutes);
  return `${first} - ${second}`;
}

function getDurationFromMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return `${hours}ч ${minutesLeft}м`;
}

interface TicketProps {
  ticket: ITicket;
  id: number;
}

const Ticket: FC<TicketProps> = React.memo((props) => {
  const { ticket, id } = props;
  const { price, carrier, segments } = ticket;
  const { origin, destination, date, duration, stops } = segments[0];
  const { origin: origin2, destination: destination2, date: date2, duration: duration2, stops: stops2 } = segments[1];

  return (
    <li className={classNames.ticket} key={id}>
      <div className={classNames.ticket__header}>
        <h3 className={classNames.ticket__price}>{price}</h3>
        <h3 className={classNames.ticket__company}>{carrier}</h3>
      </div>
      <SegmentInfo origin={origin} destination={destination} date={date} duration={duration} stops={stops} />
      <SegmentInfo origin={origin2} destination={destination2} date={date2} duration={duration2} stops={stops2} />
    </li>
  );
});

interface SegmentInfoProps {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}

const SegmentInfo: FC<SegmentInfoProps> = (props) => {
  const { origin, destination, date, duration, stops } = props;

  return (
    <div className={classNames.ticket__body}>
      <div className={classNames.ticket__date}>
        <p className={classNames.ticket__description}>
          {origin}-{destination}
        </p>
        {getFormatTime(date, duration)}
      </div>
      <div className={classNames.ticket__time}>
        <p className={classNames.ticket__description}>В пути</p>
        {getDurationFromMinutes(duration)}
      </div>
      <div className={classNames.ticket__transplan}>
        <p className={classNames.ticket__description}>{stops.length} пересадки</p>
        {stops.join(', ')}
      </div>
    </div>
  );
};

export default Ticket;
