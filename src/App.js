import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    // Box wrapper helps push footer to the bottom on short pages
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>

      <Footer /> {/* Add Footer Here */}
    </Box>
  );
}

export default App;