import { nanoid } from 'nanoid/non-secure';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contacts/Operations';
import { selectFilter, selectContacts } from 'Redux/contacts/Selector';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={nanoid()} id={contact.id}>
            <span
              className={css.item_content}
            >{`${contact.name}:  ${contact.number}`}</span>
            <button
              className={css.deleted_button}
              data-id={contact.id}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
