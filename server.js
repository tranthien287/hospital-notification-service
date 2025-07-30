const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const notiRoutes = require('./routes/notifications');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/notifications', notiRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` Notification Service running on port ${PORT}`));
