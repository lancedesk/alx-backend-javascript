#!/usr/bin/node

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Handle end event to display closing message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
