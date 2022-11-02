import { Component } from 'react';
import { FormSlyled, Label, Button } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormSlyled onSubmit={this.handleSubmit}>
        <Label>
          {' '}
          Name
          <input
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeInput}
          />
        </Label>

        <Label>
          {' '}
          Number
          <input
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChangeInput}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormSlyled>
    );
  }
}

export default Form;
