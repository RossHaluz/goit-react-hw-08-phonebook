import { selectUser, selectIsUserLogin } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isUserLogin = useSelector(selectIsUserLogin);

  return {
    user,
    isUserLogin,
  };
};
