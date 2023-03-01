import { useAuth } from 'components/hooks/useAuth';
import { FiSmile } from 'react-icons/fi';
import { UserMenuContainer } from './UserMenu.jsx.styled';

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <FiSmile />
      <p>Welome {user}</p>
    </UserMenuContainer>
  );
};

export default UserMenu;
