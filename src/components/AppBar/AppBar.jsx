import AuthNav from 'components/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoginUser } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoginUser ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
