#!/usr/bin/node

// Import the express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port to listen on
const PORT = 1245;

// Define the route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for handling any other endpoints
app.get('*', (req, res) => {
  res.status(404).send(`<DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ${req.url}</pre></body></html>`);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app (server)
module.exports = app;
