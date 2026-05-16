import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, TextField, Button, MenuItem, LinearProgress, Box } from '@mui/material';
import axios from 'axios';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', serviceType: 'MERN Stack', budget: '' });
  const [newTicket, setNewTicket] = useState({ subject: '', issueDescription: '', priority: 'Medium' });

  const token = localStorage.getItem('token');

  const fetchData = async () => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const projRes = await axios.get('http://localhost:5000/api/projects', config);
      const tickRes = await axios.get('http://localhost:5000/api/tickets', config);
      setProjects(projRes.data);
      setTickets(tickRes.data);
    } catch (err) {
      console.error('Error fetching dashboard metrics');
    }
  };

  useEffect(() => { 
    if (token) fetchData(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', newProject, { headers: { Authorization: `Bearer ${token}` } });
      setNewProject({ title: '', serviceType: 'MERN Stack', budget: '' });
      fetchData();
    } catch (err) { alert('Error processing requirement'); }
  };

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tickets', newTicket, { headers: { Authorization: `Bearer ${token}` } });
      setNewTicket({ subject: '', issueDescription: '', priority: 'Medium' });
      fetchData();
    } catch (err) { alert('Error opening support ticket'); }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, pb: 10 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }} color="primary">Client Workspace & Board</Typography>
      <Grid container spacing={4}>
        
        {/* Project Pipeline Form & View */}
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 4, p: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Submit Project Proposal / Scope</Typography>
            <form onSubmit={handleCreateProject}>
              <TextField fullWidth label="Project Concept Name" margin="dense" required value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
              <TextField fullWidth select label="Technology Framework" margin="dense" value={newProject.serviceType} onChange={(e) => setNewProject({ ...newProject, serviceType: e.target.value })}               >
                <MenuItem value="MERN Stack">MERN Engine Stack</MenuItem>
                <MenuItem value="Java Spring Boot">Java Enterprise Core</MenuItem>
                <MenuItem value="WordPress">WordPress CMS Ecosystem</MenuItem>
                <MenuItem value="Maintenance">Retainer Maintenance Plan</MenuItem>
              </TextField>
              <TextField fullWidth label="Estimated Budget Window ($)" margin="dense" required value={newProject.budget} onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })} />
              <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Initiate Pipeline</Button>
            </form>
          </Card>

          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Active Development Lifecycles</Typography>
          {projects.length === 0 ? <Typography color="textSecondary">No active environments.</Typography> : 
            projects.map((p) => (
              <Card key={p._id} sx={{ mb: 2, background: '#1c2333' }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography fontWeight="bold">{p.title}</Typography>
                    <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 1, backgroundColor: 'primary.dark' }}>{p.status}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>Tech Stack: {p.serviceType}</Typography>
                  <Typography variant="caption" color="textSecondary">Velocity Progress Pipeline:</Typography>
                  <LinearProgress variant="determinate" value={p.progress} sx={{ height: 6, borderRadius: 2, mt: 0.5 }} />
                </CardContent>
              </Card>
            ))
          }
        </Grid>

        {/* Maintenance / Support Tickets Panel */}
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 4, p: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Open Immediate Maintenance Request</Typography>
            <form onSubmit={handleCreateTicket}>
              <TextField fullWidth label="Issue Subject Line" margin="dense" required value={newTicket.subject} onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })} />
              <TextField fullWidth multiline rows={2} label="Describe optimization or bug fix needed" margin="dense" required value={newTicket.issueDescription} onChange={(e) => setNewTicket({ ...newTicket, issueDescription: e.target.value })} />
              <TextField fullWidth select label="Priority Escalation" margin="dense" value={newTicket.priority} onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}              >
                <MenuItem value="Low">Low (General Update)</MenuItem>
                <MenuItem value="Medium">Medium (UI Broken/Patch)</MenuItem>
                <MenuItem value="High">High (Production Outage)</MenuItem>
              </TextField>
              <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>Dispatch Maintenance Ticket</Button>
            </form>
          </Card>

          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Live Ticket Tracker</Typography>
          {tickets.length === 0 ? <Typography color="textSecondary">All systems fully operational.</Typography> : 
            tickets.map((t) => (
              <Card key={t._id} sx={{ mb: 2, background: '#1c2333' }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight="bold">{t.subject}</Typography>
                    <Typography variant="caption" color={t.priority === 'High' ? 'error.main' : 'warning.main'}>{t.priority} Alert</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>{t.issueDescription}</Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 1, color: t.status === 'Open' ? '#00e5ff' : '#81c784' }}>Status: {t.status}</Typography>
                </CardContent>
              </Card>
            ))
          }
        </Grid>

      </Grid>
    </Container>
  );
}

export default Dashboard;