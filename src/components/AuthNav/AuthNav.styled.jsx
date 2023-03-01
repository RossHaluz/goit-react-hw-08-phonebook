import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.nav``;

export const AuthNavigationLink = styled(NavLink)`
  color: #030303;
  margin-right: 10px;
  font-size: 18px;

  &.active {
    color: orange;
    text-decoration: underline;
  }

  :last-child {
    margin-right: 0;
  }
`;