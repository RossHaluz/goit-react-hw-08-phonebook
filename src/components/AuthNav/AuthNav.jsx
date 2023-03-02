import { AuthNavigation, AuthNavigationLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavigation>
      <AuthNavigationLink to="/login">Log in</AuthNavigationLink>
      <AuthNavigationLink to="/signout">Registration</AuthNavigationLink>
    </AuthNavigation>
  );
};

export default AuthNav;
