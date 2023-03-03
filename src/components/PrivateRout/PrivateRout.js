import { useAuth } from 'components/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRout = ({ component: Component, redirectTo = "/" }) => {
  const { isUserLogin, isRefreshing } = useAuth();
  const shouldRedirect = !isUserLogin && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}