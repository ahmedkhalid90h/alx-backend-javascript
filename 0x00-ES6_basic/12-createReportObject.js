/**
 * createEmployeesObject - Creates an object with employees
 * @param {String[]} employeesList
 * @returns {Object} - Report object
 */

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
