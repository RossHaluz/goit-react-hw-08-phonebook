import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import Header from 'components/AppBar';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: '30px' }}>
        <Suspense fallback={'Loading..'}>
          <Outlet />
        </Suspense>
        <Toaster position="top-center" />
      </Container>
    </>
  );
};

export default SharedLayout;
