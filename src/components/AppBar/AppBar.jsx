import { AppBar, Toolbar, Box } from '@mui/material';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

const Header = () => {
  const { isUserLogin } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>
        {isUserLogin ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
