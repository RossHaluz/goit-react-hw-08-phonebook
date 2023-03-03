import { MaineNavigation, MaineNavigationLink } from './Navigation.styled';
import { useAuth } from 'components/hooks/useAuth';

const Navigation = () => {
  const { isUserLogin } = useAuth();
  return (
    <MaineNavigation>
      {/* <MaineNavigationLink to="/">Home</MaineNavigationLink> */}
      {isUserLogin && (
        <MaineNavigationLink to="/contact-form">Contacts</MaineNavigationLink>
      )}
    </MaineNavigation>
  );
};

export default Navigation;
