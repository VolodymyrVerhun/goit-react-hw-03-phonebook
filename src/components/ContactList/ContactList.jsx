import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import style from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul className={style.list}>
        {contacts.map(contact => {
          return (
            <ContactItem
              deleteContact={deleteContact}
              key={contact.id}
              contact={contact}
            />
          );
        })}
      </ul>
    );
  }
}

// export default function ContactList({ contacts, deleteContact }) {
//   console.log('yuuuhooo', contacts);
//   return (
//     <ul className={style.list}>
//       {contacts.map(contact => {
//         return (
//           <ContactItem
//             deleteContact={deleteContact}
//             key={contact.id}
//             contact={contact}
//           />
//         );
//       })}
//     </ul>
//   );
// }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
