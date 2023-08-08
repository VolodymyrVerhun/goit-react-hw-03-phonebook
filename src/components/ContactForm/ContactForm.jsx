import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import React from 'react';
import { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    // const { name, number } = this.props;
    return (
      <form className={style.form} onSubmit={this.onSubmit}>
        <label className={style.label} htmlFor="username">
          Name
        </label>
        <input
          className={style.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, 
                 Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={style.label} htmlFor="number">
          Number
        </label>
        <input
          className={style.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={style.btn} type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
