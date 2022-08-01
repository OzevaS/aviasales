/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { ChangeEventHandler, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/sort-actions';
import { IStateReducer } from '../../../reducers';
import { ESort } from '../../../types';

import classNames from './sort-menu.module.scss';

interface ToggleMenuProps {
  items: {
    label: string;
    value: ESort;
  }[];
  onChange: (sort: any) => void;
  selected: any;
}

const SortMenu: FC<ToggleMenuProps> = (props) => {
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
  const { sort } = state;
  return {
    selected: sort.value,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { changeSort: onChange } = bindActionCreators(actions, dispatch);
  return {
    onChange,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
