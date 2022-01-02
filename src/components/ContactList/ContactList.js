import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DeleteContactButton = styled.button`
   {
    padding: 5px 20px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 10%;
    box-shadow: 0px 4px 10px 2px rgba(black, 0.2);
    color: #ff0000;
    border-color: #cccccc;
    cursor: pointer;
  }
`;

const ContactList = ({ contacts, onDeleteButtonClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <DeleteContactButton
            type="button"
            name="delete"
            onClick={() => onDeleteButtonClick({ id })}
          >
            Delete
          </DeleteContactButton>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),

  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default ContactList;
