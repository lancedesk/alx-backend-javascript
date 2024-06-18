#!/usr/bin/node

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  let input = process.stdin.read();
  if (input !== null) {
    // Remove newline characters from input
    input = input.trim();
    console.log(`Your name is: ${input}`);
    console.log('This important software is now closing');
    process.stdin.end();
  }
});

// Handle end event to display closing message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
