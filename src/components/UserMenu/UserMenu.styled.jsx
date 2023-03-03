import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { FiSmile } from 'react-icons/fi';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ButtonLogOut = styled(Button)`
  background-color: white;
  color: #030303;
  font-size: 12px;

  :hover {
    color: white;
  }
`;

export const IconAcount = styled(FiSmile)`
  font-size: 20px;
`;
