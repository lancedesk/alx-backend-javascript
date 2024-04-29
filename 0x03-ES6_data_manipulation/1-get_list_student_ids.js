/**
 * Returns an array of student IDs.
 *
 * Parameters:
 * - students: An array of student objects.
 *
 * Returns:
 * - An array containing the IDs of the students.
 */

function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}

export default getListStudentIds;
