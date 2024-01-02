import getBudgetObject from './7-getBudgetObject';

/**
 * getFullBudgetObject
 * @param {Number} income
 * @param {Number} gdp
 * @param {Number} capita
 * @returns {Number}
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
