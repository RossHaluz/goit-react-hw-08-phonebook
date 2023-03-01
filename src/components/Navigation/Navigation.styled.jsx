import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  color: #fff;
  margin-right: 10px;
  font-size: 18px;

  &.active {
    color: orange;
    text-decoration: underline;
  }
`;
