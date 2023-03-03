import { Navigate } from "react-router-dom";

const { useAuth } = require("components/hooks/useAuth");

export const RestrictedRoute = ({ component: Component, redirectTo = "/"}) => {
    const { isUserLogin } = useAuth();
    return isUserLogin ? <Navigate to={redirectTo} /> : Component;
}