/* eslint-disable import/no-named-as-default */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC, useEffect } from 'react';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { FilterStopsTypes } from '../../../types/filter';
import FilterStops from '../filters';
import SortPriceMenu from '../sort-menu';
import { SortPriceTypes } from '../../../types/sort';
import { useActions } from '../../../hooks/useActions';
import { useTicketFilter } from '../../../hooks/useTicketFilter';
import { useTicketSort } from '../../../hooks/useTicketSort';
import TicketListWithData from '../../../hoc/hoc-components/ticketListWithData';
import { IDataState } from '../../../hoc/hoc-helpers/withStateData';
import { ITicket } from '../../../types/ticket';

import 'antd/dist/antd.css';
import classNames from './app.module.scss';

const filterItems = [
  {
    label: 'Все',
    value: FilterStopsTypes.ALL,
  },
  {
    label: 'Без пересадок',
    value: FilterStopsTypes.STOPS_NONE,
  },
  {
    label: '1 пересадка',
    value: FilterStopsTypes.STOPS_ONE,
  },
  {
    label: '2 пересадки',
    value: FilterStopsTypes.STOPS_TWO,
  },
  {
    label: '3 пересадки',
    value: FilterStopsTypes.STOPS_THREE,
  },
];

const sortItems = [
  {
    label: 'Самый дешевый',
    value: SortPriceTypes.CHEAPEST,
  },
  {
    label: 'Самый быстрый',
    value: SortPriceTypes.FASTEST,
  },
  {
    label: 'Оптимальный',
    value: SortPriceTypes.OPTIMAL,
  },
];

const App: FC = () => {
  const { searchId, tickets, limit, loading, error, stop } = useAppSelector((state) => state.tickets);
  const { fetchTickets, getSearchId, setTicketsLimit } = useActions();

  useEffect(() => {
    getSearchId();
  }, []);

  useEffect(() => {
    if (searchId) {
      fetchTickets();
    }
  }, [searchId]);

  const ticketsFilteredAndSorted = useTicketSort(useTicketFilter(tickets)).slice(0, limit);

  let ticketsView: ITicket[] | null = ticketsFilteredAndSorted;
  if (tickets.length === 0) {
    ticketsView = null;
  }

  const dataStateTickets: IDataState = {
    data: ticketsView,
    error,
    loading: !stop,
    hasNotDataMessage: 'Рейсов, подходящих под заданные фильтры, не найдено',
  };

  return (
    <ErrorBoundary>
      <section className={classNames['aviasales-app']}>
        <header className={classNames['aviasales-app__header']}>
          <img className={classNames['aviasales-app__logo']} src="./plane.svg" alt="Aviasales" />
        </header>
        <div className={classNames['aviasales-app__container']}>
          <div className={classNames['aviasales-app__sidebar']}>
            <FilterStops title="Количество пересадок" items={filterItems} />
          </div>
          <div className={classNames['aviasales-app__content']}>
            <SortPriceMenu items={sortItems} />
            <TicketListWithData {...dataStateTickets} />
            <button
              onClick={() => {
                setTicketsLimit(limit + 5);
              }}
              className={classNames['aviasales-app__button-next']}
            >
              Показать еще 5 билетов!
            </button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default App;
