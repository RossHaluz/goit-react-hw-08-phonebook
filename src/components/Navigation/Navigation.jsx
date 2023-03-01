import { NavigationLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/products">Products</NavigationLink>
    </nav>
  );
};

export default Navigation;
