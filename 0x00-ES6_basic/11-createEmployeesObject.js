/**
 * createEmployeesObject
 * @param {String} departmentName
 * @param {String[]} employees
 * @returns {Object}
 */
export default function createEmployeesObject(departmentName, employees) {
  const department = {
    [departmentName]: employees,
  };

  return department;
}
