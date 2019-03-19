const API_URL = 'https://frontend-test-trackmob.firebaseio.com'
const GITHUB_USER = 'nandomoreirame'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const http = (path, method = 'GET', body = '', headers = {}) =>
  fetch(`${ API_URL }/${ GITHUB_USER }${ path }`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...headers
    },
  })

export const get = (path, headers = {}) =>
  http(path, headers, 'GET')

export const post = (path, data, headers = {}) =>
  http(path, headers, 'POST', encode({ ...data }))

export default {
  http,
  get,
  post
}
