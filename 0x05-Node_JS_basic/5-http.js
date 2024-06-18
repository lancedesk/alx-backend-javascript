#!/usr/bin/node

const http = require('http');
const fs = require('fs').promises;

/**
 * countStudents - Counts students in a CSV file
 * @param {string} path - Path to the CSV file
 * @returns {Promise<void>}
*/

async function countStudents (path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = data
      .split('\n')
      .filter((student) => student.length > 0)
      .map((student) => student.split(','));

    students.shift();
    const studentNumber = students.length;
    const studyField = {};

    console.log(`Number of students: ${studentNumber}`);

    students.forEach((student) => {
      if (!studyField[student[3]]) studyField[student[3]] = [];
      studyField[student[3]].push(student[0]);
    });

    Object.keys(studyField).forEach((key) => {
      console.log(
        `Number of students in ${key}: ${
          studyField[key].length
        }. List: ${studyField[key].join(', ')}`
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Check the URL path
  if (url.pathname === '/') {
    // Send "Hello Holberton School!" for the root path
    res.end('Hello Holberton School!\n');
  } else if (url.pathname === '/students') {
    try {
      // Call the countStudents function and send the response
      await countStudents(process.argv[2]);
      res.end();
    } catch (error) {
      res.end('Error: Cannot load the database\n');
    }
  } else {
    // Send a 404 response for other paths
    res.writeHead(404);
    res.end('404 Not Found\n');
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
