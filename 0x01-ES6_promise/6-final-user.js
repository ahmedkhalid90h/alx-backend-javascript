import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * handleProfileSignup
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fileName
 * @returns {Promise<Array<{status: string, value: string}>>}
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise
    .allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    })));
}
