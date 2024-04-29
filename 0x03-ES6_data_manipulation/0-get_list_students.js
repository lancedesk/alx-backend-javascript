/**
 * Returns an array of student objects.
 *
 * Each object has the following attributes:
 * - id: Number
 * - firstName: String
 * - location: String
 *
 * Returns:
 * - An array containing objects representing students.
 */

function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

export default getListStudents;
