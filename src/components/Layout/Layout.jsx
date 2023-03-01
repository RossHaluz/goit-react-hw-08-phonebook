import { Container } from '@mui/material';
import Header from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Container } from './Layout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: '2rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
