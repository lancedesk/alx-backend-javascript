#!/usr/bin/node

const fs = require('fs');

/**
 * countStudents - Function to count students in a CSV file
 * @param {string} path - Path to the CSV file
 */

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data
      .split('\n')
      .filter((student) => student.length > 0)
      .map((student) => student.split(','));

    students.shift();
    console.log(`Number of students: ${students.length}`);

    const studyField = {};

    students.forEach((student) => {
      if (!studyField[student[3]]) studyField[student[3]] = [];
      studyField[student[3]].push(student[0]);
    });

    Object.keys(studyField).forEach((key) => {
      console.log(
        `Number of students in ${key}: ${
          studyField[key].length
        }. List: ${studyField[key].join(', ')}`,
      );
    });
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
