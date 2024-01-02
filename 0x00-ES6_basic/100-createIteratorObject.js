/**
 * createIteratorObject
 * @param {Object} report
 * @returns {Array}
 */
export default function createIteratorObject(report) {
  let all = [];
  for (const arr of Object.values(report.allEmployees)) {
    all = [...all, ...arr];
  }

  return all;
}
