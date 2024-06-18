const fs = require('fs').promises;

/**
 * Read the database asynchronously.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<Object>} - Resolves to an object of arrays of first names per field.
*/

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const students = data
          .split('\n')
          .filter((student) => student.length > 0)
          .map((student) => student.split(','));

        students.shift();
        const statistics = {};
        students.forEach((student) => {
          if (!statistics[student[3]]) statistics[student[3]] = [];
          statistics[student[3]].push(student[0]);
        });
        resolve(statistics);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
