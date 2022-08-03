/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { useActions } from '../../../hooks/useActions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { FilterActionTypes, FilterStopsTypes, FilterTypes } from '../../../types/filter';

import classNames from './filter.module.scss';

interface FiltersProps {
  title: string;
  items: {
    label: string;
    value: FilterTypes;
  }[];
}

const FilterStops: React.FC<FiltersProps> = ({ title, items }) => {
  const { stops } = useAppSelector((state) => state.filter);
  const { addFilterStop, removeFilterStop } = useActions();

  const handleChange = (value: FilterStopsTypes) => {
    if (!stops.includes(value)) {
      addFilterStop(value);
    }
    else if (stops.includes(value)) {
      removeFilterStop(value);
    }
  };

  const itemsElement = items.map((item) => {
    const { label, value } = item;

    let checked: boolean;
    if (stops.includes(FilterStopsTypes.ALL)) {
      checked = true;
    } else {
      checked = stops.includes(value);
    }

    return (
      <label className={classNames.container} key={value}>
        {label}
        <input checked={checked} type="checkbox" value={value} onChange={() => handleChange(value)} />
        <span className={classNames.checkmark} />
      </label>
    );
  });

  return (
    <div className={classNames.filter}>
      <h3 className={classNames.filter__title}>{title}</h3>
      <ul className={classNames.filter__options}>{itemsElement}</ul>
    </div>
  );
};

export default FilterStops;
