import { useSelector } from "react-redux";
import { selectUser, isUserLogin } from "redux/auth/selectors";

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoginUser = useSelector(isUserLogin);

    return {
        user,
        isLoginUser
    }
}
