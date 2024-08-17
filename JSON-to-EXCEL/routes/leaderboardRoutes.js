const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Route for downloading the leaderboard Excel file
router.get('/download-leaderboard', leaderboardController.downloadLeaderboard);

module.exports = router;
