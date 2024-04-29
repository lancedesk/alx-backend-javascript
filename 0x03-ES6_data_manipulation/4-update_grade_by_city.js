/**
 * Updates student grades by city.
 *
 * Filters students by city and updates their grade based on the provided newGrades data.
 *
 * Parameters:
 * - students: An array of student objects.
 * - city: The city to filter students by.
 * - newGrades: An array of objects containing student IDs and corresponding new grades.
 *
 * Returns:
 * - An array of updated student objects with grades included.
 */

function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .find((grade) => grade.studentId === student.id) || defaultGrade).grade,
      }));
  }
  return [];
}

export default updateStudentGradeByCity;
