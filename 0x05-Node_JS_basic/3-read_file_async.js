#!/usr/bin/node

const fs = require('fs').promises;

/**
 * countStudents - Counts students in a CSV file
 * @param {string} path - Path to the CSV file
 * @returns {Promise<void>}
*/

async function countStudents(path) {
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
        }. List: ${studyField[key].join(', ')}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
