import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" color="text.secondary">
          © {new Date().getFullYear()} My Journal. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          A space for thoughts, reflections, and personal growth.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 