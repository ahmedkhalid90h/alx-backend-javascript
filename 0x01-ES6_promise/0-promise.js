/**
 * getResponseFromAPI
 * @return {string} status
 */

let uploadPhotos = () => Promise.resolve({
  satuse: 200,
  body: 'photo-profile-1'
})
let createUser = () => Promise.resolve({
  firstName: 'Guillaume',
  lastName: 'Salva'
})

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`))
}
