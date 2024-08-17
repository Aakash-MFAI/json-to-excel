const mongoose = require('mongoose'); // Add this line
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const Leaderboard = require('../models/leaderboard');

exports.downloadLeaderboard = (req, res) => {
 // Sample data - this could be replaced with actual data from the database
 const leaderboardData = [
  {
   userId: new mongoose.Types.ObjectId(), // Using mongoose here
   userName: "Alice",
   totalMarks: 95,
   totalTimeTaken: 300,
   totalQuestionsAnswered: 10,
   ranking: 1
  },
  {
   userId: new mongoose.Types.ObjectId(),
   userName: "Bob",
   totalMarks: 90,
   totalTimeTaken: 350,
   totalQuestionsAnswered: 10,
   ranking: 2
  },
  {
   userId: new mongoose.Types.ObjectId(),
   userName: "Charlie",
   totalMarks: 85,
   totalTimeTaken: 400,
   totalQuestionsAnswered: 10,
   ranking: 3
  }
 ];

 // Convert JSON to a worksheet
 const worksheet = xlsx.utils.json_to_sheet(leaderboardData, {
  header: ['userId', 'userName', 'totalMarks', 'totalTimeTaken', 'totalQuestionsAnswered', 'ranking']
 });

 // Create a new workbook and add the worksheet to it
 const workbook = xlsx.utils.book_new();
 xlsx.utils.book_append_sheet(workbook, worksheet, "Leaderboard");

 // Define the file path
 const filePath = path.join(__dirname, '../uploads/leaderboard.xlsx');

 // Write the workbook to a new Excel file
 xlsx.writeFile(workbook, filePath);

 // Send the file for download
 res.download(filePath, "leaderboard.xlsx", (err) => {
  if (err) {
   console.error("Error downloading the file", err);
   res.status(500).send("Error downloading the file");
  }

  // Delete the file after download
  fs.unlink(filePath, (err) => {
   if (err) {
    console.error("Error deleting the file", err);
   }
  });
 });
};
