const API_URL = ''

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const http = (path, method = 'GET', body = '', headers = {}) =>
  fetch(`${ API_URL }${ path }`, {
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
