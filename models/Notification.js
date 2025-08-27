const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  patient_id: String,
  type: String,
  content: String,
  status: String,
});

module.exports = mongoose.model('Notification', NotificationSchema);
