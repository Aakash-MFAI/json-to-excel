const mongoose = require('mongoose');

// Define the leaderboard schema
const leaderboardSchema = new mongoose.Schema({
 userId: {
  type: mongoose.Schema.Types.ObjectId,
  required: true,
  ref: 'User'
 },
 userName: {
  type: String,
  required: true
 },
 totalMarks: {
  type: Number,
  required: true
 },
 totalTimeTaken: {
  type: Number,
  required: true
 },
 totalQuestionsAnswered: {
  type: Number,
  required: true
 },
 ranking: {
  type: Number,
 }
});

// Create and export the model
const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
module.exports = Leaderboard;
