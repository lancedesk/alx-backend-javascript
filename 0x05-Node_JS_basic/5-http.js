#!/usr/bin/node

const http = require('http');

// Include countStudents function - Counts students in a CSV file
const countStudents = require('./3-read_file_async');
const args = process.argv.slice(2);
const DATABASE = args[0];

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  // Check the URL path
  if (url === '/') {
    // Send "Hello Holberton School!" for the root path
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      // Call the countStudents function and send the response
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  // Send a 404 response for other paths
  res.statusCode = 404;
  res.end();
});

// Define the port to listen on
const PORT = 1245;

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app (server)
module.exports = app;
