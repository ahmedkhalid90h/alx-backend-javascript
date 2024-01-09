/**
 * @param {Array<{
 * id: Number,
 * firstName: String,
 * location: String
 * }>} getListStudents
 * @param {String} city
 * @param {Array<
 *  { studentId: Number, grade: Number }
 * >} newGrades
 * @return {Array<{
 * id: Number,
 * firstName: String,
 * location: String,
 * grade: String
 * }>}
 */
export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  if (typeof getListStudents !== 'object') {
    return [];
  }
  const listStudents = getListStudents;
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const listStudentsByCity = listStudents.filter(
    (student) => student.location === city,
  );
  const listStudentsByCityWithGrades = listStudentsByCity.map((student) => {
    const grade = newGrades.filter((grade) => grade.studentId === student.id);
    if (grade.length === 0) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: grade[0].grade };
  });
  return listStudentsByCityWithGrades;
}
