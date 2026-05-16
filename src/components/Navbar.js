import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AppBar position="sticky" sx={{ background: 'rgba(18, 24, 36, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 0' }}>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: '#00e5ff', fontWeight: 'bold', letterSpacing: 1 }}>
            NEXUSDEV.
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/">Services</Button>
            {token ? (
              <>
                <Button color="primary" variant="outlined" component={Link} to="/dashboard" sx={{ mx: 1 }}>Dashboard</Button>
                <Button color="error" variant="contained" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Button color="primary" variant="contained" component={Link} to="/login">Client Portal</Button>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;