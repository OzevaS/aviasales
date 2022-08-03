/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC } from 'react';

import { useActions } from '../../../hooks/useActions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { SortPriceTypes } from '../../../types/sort';

import classNames from './sortPriceMenu.module.scss';

interface ToggleMenuProps {
  items: {
    label: string;
    value: SortPriceTypes;
  }[];
}

const SortPriceMenu: FC<ToggleMenuProps> = ({ items }) => {
  const { price } = useAppSelector((state) => state.sort);
  const { setSortPrice } = useActions();

  const handleChange = (value: SortPriceTypes) => {
    setSortPrice(value);
  };

  const itemsElements = items.map((item) => {
    const { label, value } = item;

    const checked = price === value;

    let className = classNames.button;
    if (checked) {
      className += ` ${classNames['button--checked']}`;
    }

    return (
      <label className={className} key={value}>
        {label}
        <input checked={checked} type="radio" name="sort" value={value} onChange={() => handleChange(value)} />
      </label>
    );
  });

  return <div className={classNames['toggle-menu']}>{itemsElements}</div>;
};

export default SortPriceMenu;
