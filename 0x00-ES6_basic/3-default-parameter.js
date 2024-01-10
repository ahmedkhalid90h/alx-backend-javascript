/**
 * Default parameters
 * @param {number} initialNumber
 * @param {number} expansion1989
 * @param {number} expansion2019
 * @return {number}
 */
export default function getSumOfHoods(
  initialNumber,
  expansion1989 = 89,
  expansion2019 = 19,
) {
  return initialNumber + expansion1989 + expansion2019;
}
