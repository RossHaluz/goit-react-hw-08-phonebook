import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperation from 'redux/contacts/operations';
import { RotatingLines } from 'react-loader-spinner';
import { Contacts, ContactsContainer } from './ContactsList.styled';
import ContactItem from 'components/ContactItem';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.getContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      )}
      {contacts && contacts.length > 0 && !loading && (
        <Contacts
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => {
              return <ContactItem key={contact.id} data={contact} />;
            })}
        </Contacts>
      )}
    </ContactsContainer>
  );
};

export default ContactsList;
