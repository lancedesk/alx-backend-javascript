/**
 * Returns the sum of student IDs.
 *
 * Parameters:
 * - students: An array of student objects.
 *
 * Returns:
 * - The sum of the IDs of the students.
 */

function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}

export default getStudentIdsSum;
