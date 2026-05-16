import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import BuildIcon from '@mui/icons-material/Build';

const services = [
  { title: 'MERN Full-Stack Apps', desc: 'Custom, reactive enterprise web software built from scratch with Node, Express, and React.', icon: <TerminalIcon fontSize="large" color="primary" /> },
  { title: 'Java Spring Boot Architecture', desc: 'Secure, clean enterprise-grade backends, RESTful microservices, and rapid heavy-data computations.', icon: <StorageIcon fontSize="large" color="primary" /> },
  { title: 'Premium WordPress & WooCommerce', desc: 'Sleek conversion-driven business interfaces, custom builds, and robust payment checkouts.', icon: <ShopTwoIcon fontSize="large" color="primary" /> },
  { title: '24/7 Dedicated Maintenance', desc: 'Continuous updates, rapid core optimization, security sweeps, and on-demand monthly UI bug fixes.', icon: <BuildIcon fontSize="large" color="primary" /> },
];

function LandingPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 15, textAlign: 'center', background: 'radial-gradient(circle, rgba(124,77,255,0.1) 0%, rgba(10,14,23,1) 80%)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Architecting High-Performance <span style={{ color: '#00e5ff' }}>Digital Products</span>
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ mb: 5 }}>
            From elite MERN platforms and deep Java infrastructure to custom production-ready WordPress ecosystems. We build and maintain software built for scale.
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/login" sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}>
            Launch Your Project & Track Progress Live
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ pb: 10}}>
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold', mb: 6 }}>Our Architecture Framework</Typography>
        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 8px 24px rgba(0,229,255,0.2)' } }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1.5 }}>{service.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{service.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default LandingPage;