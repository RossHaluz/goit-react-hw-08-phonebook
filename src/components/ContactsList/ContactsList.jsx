import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperation from 'redux/contacts/operations';
import { RotatingLines } from 'react-loader-spinner';
import {
  Contacts,
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactBtnDelete,
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.getContacts());
  }, [dispatch]);

  return (
    <>
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
        <Contacts>
          {contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => {
              return (
                <ContactsItem key={id}>
                  <ContactsItemName>{name}:</ContactsItemName>
                  <ContactsItemNumber> {number}</ContactsItemNumber>
                  <ContactBtnDelete
                    type="button"
                    onClick={() =>
                      dispatch(contactsOperation.deleteContact(id))
                    }
                  >
                    Delete
                  </ContactBtnDelete>
                </ContactsItem>
              );
            })}
        </Contacts>
      )}
    </>
  );
};

export default ContactsList;
