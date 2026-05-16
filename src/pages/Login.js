import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [action, setAction] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/auth/${action}`;
    try {
      const res = await axios.post(url, formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Authentication failed');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 3 }}>
            {action === 'login' ? 'Access Client Portal' : 'Register Account'}
          </Typography>
          <ToggleButtonGroup exclusive value={action} onChange={(e, val) => val && setAction(val)} fullWidth sx={{ mb: 3 }}>
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="register">Register</ToggleButton>
          </ToggleButtonGroup>
          <form onSubmit={handleSubmit}>
            {action === 'register' && (
              <TextField fullWidth label="Full Name" required margin="normal" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            )}
            <TextField fullWidth label="Email Address" type="email" required margin="normal" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <TextField fullWidth label="Password" type="password" required margin="normal" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 3, py: 1.2, fontWeight: 'bold' }}>
              {action === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;