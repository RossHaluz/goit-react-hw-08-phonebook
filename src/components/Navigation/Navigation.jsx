import { MaineNavigation, MaineNavigationLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <MaineNavigation>
      <MaineNavigationLink to="/">Home</MaineNavigationLink>
      <MaineNavigationLink to="/contact-form">Contacts</MaineNavigationLink>
    </MaineNavigation>
  );
};

export default Navigation;
