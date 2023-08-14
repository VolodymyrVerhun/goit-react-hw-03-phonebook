import { nanoid } from 'nanoid';
import { Component } from 'react';
import style from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const LOCAL__KEY = 'localKey';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactByLocalStor = JSON.parse(localStorage.getItem(LOCAL__KEY));
    if (contactByLocalStor) {
      this.setState({ contacts: contactByLocalStor });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem(LOCAL__KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const contact = this.state.contacts.find(contact => {
      return newContact.name === contact.name;
    });
    if (contact) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  submitContacts = newContact => {
    const newContacts = {
      ...this.state.contacts,
      name: newContact.name,
      number: newContact.number,
      id: nanoid(),
    };
    this.addContact(newContacts);
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };
  handleFilterContact = () => {
    if (this.state.contacts.length !== 0) {
      const normalizedFilter = this.state.filter.toLowerCase().trim();
      return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={style.phonebook}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onSubmit={this.submitContacts}
          // value={this.state.value}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={this.handleFilterContact()}
        />
      </div>
    );
  }
}
