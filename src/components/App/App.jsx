import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/Layout/SharedLayout';

const ContactFormPage = lazy(() => import('page/ContactFormPage'));
const HomePage = lazy(() => import('page/HomePage'));
const SignOutPage = lazy(() => import('page/SignOutPage'));
const LoginPage = lazy(() => import('page/LoginPage'));

const App = () => {
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
