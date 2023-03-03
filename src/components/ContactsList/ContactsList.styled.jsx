import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const Contacts = styled.ul`
  margin: 0;
  text-align: center;
  list-style: none;
  padding: 0;
`;

export const ContactsItem = styled.li`
  font-size: 18px;
  padding: 5px;
`;

export const ContactsItemName = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

export const ContactsItemNumber = styled.span`
  font-size: 16px;
`;

export const ContactBtnDelete = styled(IconButton)`
  margin-left: 15px;
`;

export const ContactsContainer = styled.div`
  text-align: center;
`;
