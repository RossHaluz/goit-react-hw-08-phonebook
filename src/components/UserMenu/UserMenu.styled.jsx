import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { FiSmile } from 'react-icons/fi';
import Badge from '@mui/material/Badge';

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

export const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    background-color: #44b700;
    color: #44b700;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: ripple 1.2s infinite ease-in-out;
      border: 1px solid currentColor;
      content: '';
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(0.8);
      opacity: 1;
    }
    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  }
`;
