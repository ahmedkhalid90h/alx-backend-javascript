/**
 * getResponseFromAPI
 * @return {string} status
 */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'success',
    });
    reject(new Error('The fake API is not working currently'));
  });
}
