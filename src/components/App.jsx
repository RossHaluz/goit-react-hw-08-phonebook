import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Products = lazy(() => import('../pages/Products'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
