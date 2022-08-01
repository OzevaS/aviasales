/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEventHandler } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../../actions/filter-actions';
import { EFilterStop, TypeFilter } from '../../../types';
import { TypeFilterAction } from '../../../actions/filter-actions';
import { IStateReducer } from '../../../reducers';
import { getFilterFromType } from '../../../reducers/filters-reducer';

import classNames from './filter.module.scss';

interface IFiltersProps {
  type: TypeFilter;
  title: string;
  items: {
    label: string;
    value: TypeFilterAction;
  }[];
  onChange: (type: TypeFilter, filter: EFilterStop) => void;
  filters: any;
}

const Filter: React.FC<IFiltersProps> = (props) => {
  const { type, title, items, onChange, filters } = props;

  const handleChange: ChangeEventHandler = (event) => {
    const { target } = event;
    const { value: index } = target as HTMLInputElement;
    onChange(type, items[+index].value);
  };

  const filter = getFilterFromType(filters, type);
  
  const itemsElement = items.map((item, index) => {
    const { label, value } = item;
    let checked = false;
    if (filter.includes(value)) {
      checked = true;
    }

    return (
      <label className={classNames.container} key={value}>
        {label}
        <input checked={checked} type="checkbox" value={index} onChange={handleChange} />
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

const mapStateToProps = (state: IStateReducer) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch: any) => {
  const { changeFilters: onChange } = bindActionCreators(actions, dispatch);
  return {
    onChange,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
