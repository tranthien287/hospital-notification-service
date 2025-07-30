const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

router.post('/', async (req, res) => {
  try {
    const noti = new Notification(req.body);
    await noti.save();
    res.status(201).json(noti);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const noti = await Notification.findById(req.params.id);
    res.json(noti);
  } catch (err) {
    res.status(404).json({ error: 'Not found' });
  }
});

router.get('/', async (req, res) => {
  try {
    const list = await Notification.find(req.query);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id/status', async (req, res) => {
  try {
    const noti = await Notification.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, sent_at: new Date() },
      { new: true }
    );
    res.json(noti);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
