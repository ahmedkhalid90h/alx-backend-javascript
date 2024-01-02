/**
 * @param {string} firstName
 * @param {string} lastName
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
