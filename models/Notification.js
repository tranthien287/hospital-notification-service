const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  patient_id: String,
  type: { type: String, enum: ['Email', 'SMS'] },
  content: String,
  status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
  created_at: { type: Date, default: Date.now },
  sent_at: Date
});

module.exports = mongoose.model('Notification', NotificationSchema);
