/**
 * iterateThroughObject
 * @param {Array} reportWithIterator
 * @returns
 */
export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const employee of reportWithIterator) {
    if (employee === reportWithIterator[reportWithIterator.length - 1]) {
      employees += `${employee}`;
      break;
    }
    employees += `${employee} | `;
  }

  return employees;
}
