import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import SharedLayout from 'components/Layout/SharedLayout';
import { useDispatch } from 'react-redux';
import * as userOperation from 'redux/auth/operations';

const ContactFormPage = lazy(() => import('page/ContactFormPage'));
const HomePage = lazy(() => import('page/HomePage'));
const SignOutPage = lazy(() => import('page/SignOutPage'));
const LoginPage = lazy(() => import('page/LoginPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperation.getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact-form" element={<ContactFormPage />} />
        <Route path="signout" element={<SignOutPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
