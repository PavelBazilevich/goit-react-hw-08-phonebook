import { Layout, Title } from './Contacts.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/contacts/Operations';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'Redux/contacts/Selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      {error && <p>{error}</p>}
      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && !error && contacts === [] && <p>There is no contacts</p>}
      {isLoading && <Loader />}
    </Layout>
  );
};
export default Contacts;
