import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';

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
  margin-left: 5px;
  align-self: center;
`;
export const ContactBtnEddit = styled(IconButton)`
  align-self: center;
`;

export const ListContactItem = styled(ListItem)`
  border: 1px solid #030303;
`;
