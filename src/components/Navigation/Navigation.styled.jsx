import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MaineNavigation = styled.nav``;

export const MaineNavigationLink = styled(NavLink)`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;

  &.active {
    color: orange;
    border-bottom: 2px solid orange;
  }

  :last-child {
    margin-right: 0;
  }
`;
