import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactBtnDelete,
} from './ContactItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';
import UpdateContact from 'components/UpdateContact';
import * as contactsOperation from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  const [isOpen, setIsOpen] = useState(false);

  const onShowModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <ContactsItem>
        <ContactsItemName>{name}:</ContactsItemName>
        <ContactsItemNumber> {number}</ContactsItemNumber>
        <ContactBtnDelete
          aria-label="delete"
          type="button"
          onClick={() => dispatch(contactsOperation.deleteContact(id))}
        >
          <DeleteIcon />
        </ContactBtnDelete>
        <IconButton aria-label="create" type="button" onClick={onShowModal}>
          <CreateIcon />
        </IconButton>
      </ContactsItem>
      {isOpen && <UpdateContact data={data} onClose={onShowModal} />}
    </>
  );
};

export default ContactItem;
