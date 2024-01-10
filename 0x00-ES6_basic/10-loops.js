/**
 * appendToEachArrayValue
 * @param {Object} array
 * @param {String} appendString
 * @return {Array}
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
