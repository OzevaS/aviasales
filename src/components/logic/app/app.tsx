/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useMemo, useState } from 'react';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { connect } from 'react-redux';

import AviasalesService from '../../../services/aviasales-service';
import { EFilterStop, ITicket, ESort, TypeFilter } from '../../../types';
import TicketList from '../ticket-list';
import Filter from '../filters';
import ToggleMenu from '../toggle-menu';

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

interface IAppState {
  tickets: ITicket[];
}

const App = () => {
  const aviasaleService = useMemo(() => new AviasalesService(), []);

  const [tickets, setTickets] = useState<IAppState['tickets']>([]);

  useEffect(() => {
    aviasaleService.getTickets('', '', '').then(setTickets);
  }, [aviasaleService]);

  

  return (
    <ErrorBoundary>
      <AviasaleServiceContext.Provider value={aviasaleService}>
        <section className={classNames['aviasales-app']}>
          <header className={classNames['aviasales-app__header']}>
            <img className={classNames['aviasales-app__logo']} src="./plane.svg" alt="Aviasales" />
          </header>
          <div className={classNames['aviasales-app__container']}>
            <div className={classNames['aviasales-app__sidebar']}>
              <Filter type='STOP' title="Количество пересадок" items={filterItems} />
            </div>
            <div className={classNames['aviasales-app__content']}>
              <ToggleMenu items={toggleItems} />
              <TicketList tickets={tickets} />
              <button className={classNames['aviasales-app__button-next']}>Показать еще</button>
            </div>
          </div>
        </section>
      </AviasaleServiceContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
