import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Header />
      <Container 
        component="main" 
        sx={{ 
          mt: 4, 
          mb: 4, 
          flex: 1,
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout; 