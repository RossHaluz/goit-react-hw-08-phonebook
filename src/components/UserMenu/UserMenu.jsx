import { useAuth } from 'components/hooks/useAuth';
import { FiSmile } from 'react-icons/fi';
import { ButtonLogOut, UserMenuContainer } from './UserMenu.styled';
import * as authOperation from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <FiSmile />
      <p>
        Welcome, <b>{user.name}</b>
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
