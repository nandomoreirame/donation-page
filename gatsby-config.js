const {
  author,
  description,
  homepage,
  name,
  repository,
  version,
} = require('./package.json')
const rupture = require('rupture')

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = isProduction ? homepage : 'http://localhost:8000'

module.exports = {
  siteMetadata: {
    author,
    description,
    isProduction,
    name,
    repository,
    siteUrl,
    version,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-stylus`,
      options: {
        use: [rupture()],
      },
    },
  ],
}
