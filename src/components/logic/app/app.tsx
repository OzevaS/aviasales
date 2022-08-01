/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC, useEffect, useMemo, useRef } from 'react';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AviasalesService from '../../../services/aviasales-service';
import { EFilterStop, ITicket, ESort } from '../../../types';
import TicketList from '../ticket-list';
import Filter from '../filters';
import SortMenu from '../sort-menu';
import { IStateReducer } from '../../../reducers';
import * as actionTickets from '../../../actions/tickets-actions';

import 'antd/dist/antd.css';
import classNames from './app.module.scss';

const filterItems = [
  {
    label: 'Все',
    value: EFilterStop.all,
  },
  {
    label: 'Без пересадок',
    value: EFilterStop['stop-0'],
  },
  {
    label: '1 пересадка',
    value: EFilterStop['stop-1'],
  },
  {
    label: '2 пересадки',
    value: EFilterStop['stop-2'],
  },
  {
    label: '3 пересадки',
    value: EFilterStop['stop-3'],
  },
];

const toggleItems = [
  {
    label: 'Самый дешевый',
    value: ESort.cheapest,
  },
  {
    label: 'Самый быстрый',
    value: ESort.fastest,
  },
  {
    label: 'Оптимальный',
    value: ESort.optimal,
  },
];

const AviasaleServiceContext = React.createContext<AviasalesService>(null as any);

interface IAppProps {
  tickets: ITicket[];
  fetchTickets: () => void;
}

const aviasalesService = new AviasalesService();

const App: FC<IAppProps> = ({ tickets, fetchTickets }) => {
  const [serviceLoaded, setServiceLoaded] = React.useState(false);

  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timer.current = setTimeout(() => fetchTickets(), 5000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [fetchTickets]);

  return (
    <ErrorBoundary>
      <AviasaleServiceContext.Provider value={aviasalesService}>
        <section className={classNames['aviasales-app']}>
          <header className={classNames['aviasales-app__header']}>
            <img className={classNames['aviasales-app__logo']} src="./plane.svg" alt="Aviasales" />
          </header>
          <div className={classNames['aviasales-app__container']}>
            <div className={classNames['aviasales-app__sidebar']}>
              <Filter type="STOP" title="Количество пересадок" items={filterItems} />
            </div>
            <div className={classNames['aviasales-app__content']}>
              <SortMenu items={toggleItems} />
              <TicketList tickets={tickets} />
              <button className={classNames['aviasales-app__button-next']}>Показать еще</button>
            </div>
          </div>
        </section>
      </AviasaleServiceContext.Provider>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: IStateReducer) => {
  const { tickets } = state;
  return {
    tickets: tickets.items,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchTickets: actionTickets.fetchTickets,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
