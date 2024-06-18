#!/usr/bin/node

const http = require('http');
const HOSTNAME = '127.0.0.1';
// Define the port to listen on
const PORT = 1245;
// Get the database file from command line arguments
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

// Include countStudents function - Counts students in a CSV file
const countStudents = require('./count_students');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(DATABASE.toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

// Start the server and listen on the defined port
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app (server)
module.exports = app;
