const express = require('express');
const mongoose = require('mongoose');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();

// Middleware for parsing JSON (if needed)
app.use(express.json());

// Routes
app.use('/leaderboard', leaderboardRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
