import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import PropTypes from 'prop-types';

import css from './ContactsList.module.scss';

const ContactsList = ({ contacts, removeContact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const contactsList = contacts.map(({ id, name, number }) => (
    <li className={css.contactItem} key={id}>
      {name} {number}
      <button
        className={css.delButton}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        delete
      </button>
    </li>
  ));

  return <ul className={css.contactsList}>{contactsList}</ul>;
};

export default ContactsList;

ContactsList.defaultProps = { contacts: [] };

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
