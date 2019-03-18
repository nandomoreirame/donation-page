const {
  author,
  description,
  homepage,
  name,
  repository,
  title,
  version,
} = require('../package.json')

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = isProduction ? homepage : 'http://localhost:8000'

module.exports = {
  isProduction,
  siteUrl,
  siteMetadata: {
    title,
    description,
    defaultTitle: title,
    titleTemplate: `%s ${ title }`,
    defaultDescription: description,
    author,
    version,
    isProduction,
    name,
    repository,
    siteUrl,
    twitterUsername: '@oseunando',
    facebookAppID: '',
    social: {
      facebook: 'oseunando',
      twitter: 'oseunando',
      instagram: 'oseunando',
    },
  },
}
