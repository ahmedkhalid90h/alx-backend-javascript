/**
 * concatArrays - concat arrays and string
 * @param {Array} array1
 * @param {Array} array2
 * @param {String} string
 * @return {Array}
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
