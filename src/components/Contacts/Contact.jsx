import PropTypes from 'prop-types';
import { Button, ContactsList } from './Contacts.styled';

function Contact({ name, number, id, onDeleteUser }) {
  const handleDelete = () => {
    onDeleteUser(id);
  };

  return (
    <ContactsList>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactsList>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default Contact;
