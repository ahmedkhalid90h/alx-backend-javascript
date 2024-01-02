/**
 * uploadPhoto
 * @param {string} filename
 * @returns {Promise<string>}
 */
export default function uploadPhoto(filename) {
  return Promise.reject(
    new Error(`${filename} cannot be processed`),
  );
}
