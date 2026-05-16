const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  serviceType: { type: String, enum: ['MERN Stack', 'Java Spring Boot', 'WordPress', 'Maintenance'], required: true },
  status: { type: String, enum: ['In Inquiry', 'In Progress', 'Testing', 'Completed'], default: 'In Inquiry' },
  progress: { type: Number, default: 10 },
  budget: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);