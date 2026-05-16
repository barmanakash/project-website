const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

// Create New Project Requirement
router.post('/', auth, async (req, res) => {
  const { title, serviceType, budget } = req.body;
  try {
    const newProject = new Project({
      clientId: req.user.id,
      title,
      serviceType,
      budget
    });
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get Client's Projects
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ clientId: req.user.id }).sort({ updatedAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});


module.exports = router;