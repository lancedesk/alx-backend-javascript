#!/usr/bin/node

const http = require('http');
// Include countStudents function - Counts students in a CSV file
const countStudents = require('./3-read_file_async');

// Get the database file from command line arguments
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  // Parse the URL
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  // Set the response header
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  // Define the message
  const message = 'This is the list of our students';

  switch (pathname) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      try {
        res.end(`${message}\n${await countStudents(DATABASE)}`);
      } catch (error) {
        res.statusCode = 500; // Server Error
        res.end(`${message}\n${error.message}`);
      }
      break;
    default:
      res.statusCode = 404; // Not Found
      res.end('404 Not Found');
      break;
  }
});

// Define the port to listen on
const PORT = 1245;

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app (server)
module.exports = app;
