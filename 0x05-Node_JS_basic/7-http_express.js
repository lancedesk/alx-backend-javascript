#!/usr/bin/node

const express = require('express');

const app = express();

const HOSTNAME = '127.0.0.1';
// Define the port to listen on
const PORT = 1245;
// Get the database file from command line arguments
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

// Include countStudents function - Counts students in a CSV file
const countStudents = require('./express_count_students');

// Endpoint for /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Endpoint for /students
app.get('/students', async (req, res) => {
  try {
    const studentsData = await countStudents(DATABASE.toString());
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.status(404).send('This is the list of our students\nCannot load the database');
  }
});

// Start the server
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app (server)
module.exports = app;
