#!/usr/bin/node

const http = require('http');
// Define the port to listen on
const PORT = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Send the response
  res.end('Hello Holberton School!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
