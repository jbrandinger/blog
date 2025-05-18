import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import { BlogProvider } from './context/BlogContext';
import './App.css';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BlogProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<div>Blog Page</div>} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
          </Layout>
        </Router>
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;
