export default function hasValuesFromArray(set, array) {
  const setFromArray = new Set(array);
  const setFromSet = new Set(set);
  for (const item of setFromArray) {
    if (!setFromSet.has(item)) {
      return false;
    }
  }
  return true;
}
