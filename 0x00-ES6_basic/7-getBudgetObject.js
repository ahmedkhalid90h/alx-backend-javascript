/**
 * getBudgetObject
 * @param {Number} income
 * @param {Number} gdp
 * @param {Number} capita
 * @returns {Object.<string, number>}
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
