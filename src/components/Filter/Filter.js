import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputValue = styled.input`
   {
    padding: 5px;
    margin: 10px;
    background-color: #efefef;
    border-color: #cccccc;
  }
`;

export default function Filter({ value, onChangeFilter }) {
  return (
    <label>
      <i>Find contacts by name</i>
      <InputValue
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
