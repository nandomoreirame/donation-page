const {
  author,
  description,
  homepage,
  name,
  repository,
  title,
  version,
} = require('./package.json')
const rupture = require('rupture')
const path = require('path')

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
    social: {
      facebook: 'oseunando',
      twitter: 'oseunando',
      instagram: 'oseunando',
    },
    title,
    version,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-stylus`,
      options: {
        use: [rupture()],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: path.join(__dirname, `src`, `components`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      },
    },
  ],
}
