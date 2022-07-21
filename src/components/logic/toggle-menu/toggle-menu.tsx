/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { ChangeEventHandler, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/sort-actions';
import { IStateReducer } from '../../../reducers';
import { ISortState } from '../../../reducers/sort-reducer';
import { ESort } from '../../../types';

import classNames from './toggle-menu.module.scss';

interface ToggleMenuProps {
  items: {
    label: string;
    value: ESort;
  }[];
  onChange: (sort: any) => void;
  selected: any;
}

const ToggleMenu: FC<ToggleMenuProps> = (props) => {
  const { items, onChange, selected } = props;

  const handleChange: ChangeEventHandler = (event) => {
    const { target } = event;
    const { value } = target as HTMLInputElement;
    onChange(+value);
  };

  const itemsElements = items.map((item) => {
    const { label, value } = item;

    let classNameLabel = classNames.container;
    let checked = false;
    if (selected === value) {
      checked = true;
      classNameLabel += ` ${classNames['container--checked']}`;
    }

    return (
      <label className={classNameLabel} key={value}>
        {label}
        <input checked={checked} type="radio" name="filter" value={value} onChange={handleChange} />
      </label>
    );
  });

  return <div className={classNames['toggle-menu']}>{itemsElements}</div>;
};

const mapStateToProps = (state: IStateReducer) => {
  const { sorts } = state;
  return {
    selected: sorts.price_time,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { changeSort: onChange } = bindActionCreators(actions, dispatch);
  return {
    onChange,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenu);
