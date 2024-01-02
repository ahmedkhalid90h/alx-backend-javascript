/**
 *
 * @returns {Promise<{status: number, body: string}>}
 */
export const uploadPhoto = () => Promise.resolve({
  status: 200,
  body: 'photo-profile-1',
});

/**
 *
 * @returns {Promise<{firstName: string, lastName: string}>}
 */
export const createUser = () => Promise.resolve({
  firstName: 'Guillaume',
  lastName: 'Salva',
});
