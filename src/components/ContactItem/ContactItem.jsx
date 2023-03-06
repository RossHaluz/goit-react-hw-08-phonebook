import {
  ContactBtnDelete,
  ListContactItem,
  ContactBtnEddit,
} from './ContactItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import UpdateContact from 'components/UpdateContact';
import * as contactsOperation from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  const [isOpen, setIsOpen] = useState(false);

  const onShowModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <ListContactItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {number}
              </Typography>
            </>
          }
        />
        <ContactBtnDelete
          aria-label="delete"
          type="button"
          onClick={() => dispatch(contactsOperation.deleteContact(id))}
        >
          <DeleteIcon />
        </ContactBtnDelete>
        <ContactBtnEddit
          aria-label="create"
          type="button"
          onClick={onShowModal}
        >
          <CreateIcon />
        </ContactBtnEddit>
      </ListContactItem>
      {isOpen && <UpdateContact data={data} onClose={onShowModal} />}
    </>
  );
};

export default ContactItem;
