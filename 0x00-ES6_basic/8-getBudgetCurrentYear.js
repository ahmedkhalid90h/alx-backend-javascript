/**
 * getCurrentYear
 * @returns {Number} - current year
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * getBudgetForCurrentYear
 * @param {Number} income
 * @param {Number} gdp
 * @param {Number} capita
 * @returns {Object.<string, number>} - budget
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
