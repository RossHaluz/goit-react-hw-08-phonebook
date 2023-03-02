import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ButtonLogOut = styled(Button)`
  background-color: white;
  color: #030303;

  :hover {
    color: white;
  }
`;
