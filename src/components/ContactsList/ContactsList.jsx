import PropTypes from 'prop-types';
import Contact from 'components/Contacts/Contact';
import { ContactsBox } from './ContactsList.styled';

function ContactsList({ contacts, onDeleteUser }) {
  return (
    <ContactsBox>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteUser={onDeleteUser}
        />
      ))}
    </ContactsBox>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default ContactsList;
