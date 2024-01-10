/**
 * @param {Array} getListStudents
 * @return {Array}
 */
export default function getStudentIdsSum(getListStudents) {
  if (typeof getListStudents !== 'object') {
    return [];
  }
  const listStudents = getListStudents;
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const listStudentIds = listStudents.map((student) => student.id);
  const sum = listStudentIds.reduce((a, b) => a + b, 0);
  return sum;
}
