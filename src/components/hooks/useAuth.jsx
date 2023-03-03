import {
  selectUser,
  selectIsUserLogin,
  selectIsRefreshing,
} from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isUserLogin = useSelector(selectIsUserLogin);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    user,
    isUserLogin,
    isRefreshing,
  };
};
