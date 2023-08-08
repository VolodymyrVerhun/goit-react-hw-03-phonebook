import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export default function ContactItem({ contact, deleteContact }) {
  return (
    <li className={style.item}>
      <p className={style.parag}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={style.btn}
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        Delete X
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
