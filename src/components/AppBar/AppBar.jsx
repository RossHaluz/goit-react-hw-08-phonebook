import { Toolbar, AppBar, Typography } from '@mui/material';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
// import { Header } from './AppBar.styled';

const Header = () => {
  const { isLoginUser } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
          <Navigation />
        </Typography>
        {isLoginUser ? (
          <UserMenu />
        ) : (
          <Typography>
            <AuthNav />
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
