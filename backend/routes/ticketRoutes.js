const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Ticket = require('../models/Ticket');

// Create Support Ticket
router.post('/', auth, async (req, res) => {
  const { subject, issueDescription, priority } = req.body;
  try {
    const newTicket = new Ticket({
      clientId: req.user.id,
      subject,
      issueDescription,
      priority
    });
    const ticket = await newTicket.save();
    res.json(ticket);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get Client's Tickets
router.get('/', auth, async (req, res) => {
  try {
    const tickets = await Ticket.find({ clientId: req.user.id }).sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;