import { useAuth } from 'components/hooks/useAuth';
import {
  ButtonLogOut,
  StyledBadge,
  UserMenuContainer,
} from './UserMenu.styled';
import * as authOperation from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      <p>
        <b>{user.name}</b>
      </p>
      <ButtonLogOut
        variant="contained"
        onClick={() => dispatch(authOperation.logout())}
      >
        Log out
      </ButtonLogOut>
    </UserMenuContainer>
  );
};

export default UserMenu;
