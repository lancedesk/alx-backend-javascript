/**
 * Returns an array of student objects filtered by location.
 *
 * Parameters:
 * - students: An array of student objects.
 * - city: The city to filter students by.
 *
 * Returns:
 * - An array containing objects representing students located in the specified city.
 */

function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}

export default getStudentsByLocation;
