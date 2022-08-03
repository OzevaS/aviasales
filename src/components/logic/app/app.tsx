/* eslint-disable import/no-named-as-default */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC } from 'react';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { FilterStopsTypes } from '../../../types/filter';
import FilterStops from '../filters';
import SortPriceMenu from '../sort-menu';
import { SortPriceTypes } from '../../../types/sort';
import TicketListWithFilterAndSort from '../../../hoc/hoc-components/TicketListWithFilterAndSort';

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

const toggleItems = [
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
  const { tickets } = useAppSelector((state) => state.tickets);

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
            <SortPriceMenu items={toggleItems} />
            <TicketListWithFilterAndSort tickets={tickets} />
            <button className={classNames['aviasales-app__button-next']}>Показать еще</button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default App;
