#!/usr/bin/node

const http = require('http');
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';
const url = require('url');

// Include countStudents function - Counts students in a CSV file
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  // Check the URL path
  if (pathname === '/') {
    // Send "Hello Holberton School!" for the root path
    res.write('Hello Holberton School!');
    res.end();
  } else if (pathname === '/students') {

    const data = [];

    data.push('This is the list of our students');

	// Call the countStudents function and send the response
    countStudents(DATABASE)
      .then((data) => {
        data.push(data);
        res.write(data.join('\n'));
        res.end();
      })
      .catch((err) => {
        data.push(err instanceof Error ? err.message : err.toString());
        res.write(data.join('\n'));
        res.end();
      });
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
