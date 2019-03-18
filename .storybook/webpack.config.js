// const { join } = require(`path`)

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.styl$/,
    use: [`style-loader`, `css-loader`, `stylus-loader`],
  })
  config.resolve.extensions.push(`.styl`)
  return config
}
