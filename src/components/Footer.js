import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#121824', color: 'text.secondary', py: 6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', mt: '20px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="#00e5ff" fontWeight="bold" gutterBottom sx={{ letterSpacing: 1 }}>
              NEXUSDEV.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, maxWidth: 300 }}>
              Architecting high-performance MERN engines, enterprise-grade Java backends, and custom WordPress ecosystems.
            </Typography>
          </Grid>

          {/* Core Services Links */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom>
              Services
            </Typography>
            <Box display="flex" flexDirection="column" gap={1.5}>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: '0.9rem' }}>MERN Stack Development</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: '0.9rem' }}>Java Spring Boot Apps</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: '0.9rem' }}>WordPress Customization</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: '0.9rem' }}>Website Maintenance</Link>
            </Box>
          </Grid>

          {/* Connect / Socials */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ ml: -1 }}>
              <IconButton color="primary" component="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" component="a" href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" component="a" href="mailto:your.email@example.com">
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

        </Grid>

        {/* Bottom Copyright Section */}
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} NexusDev Global. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;