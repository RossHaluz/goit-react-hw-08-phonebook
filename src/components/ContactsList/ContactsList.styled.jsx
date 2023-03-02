import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Contacts = styled.ul`
  margin: 0;
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

export const ContactBtnDelete = styled(Button)`
  margin-left: 15px;
`;
