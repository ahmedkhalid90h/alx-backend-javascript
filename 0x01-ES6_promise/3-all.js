import { uploadPhoto, createUser } from './utils';

/**
 * handleProfileSignup
 * @returns {Promise<[Promise<{status: number, body: string}>,
 * Promise<{firstName: string, lastName: string}>]>}
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
