const path = require(`path`)

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.styl$/,
    use: [`style-loader`, `css-loader`, `stylus-loader`],
  })
  config.resolve.extensions.push(`.styl`)

  config.resolve.alias['data'] = path.join( __dirname ,  '..', 'data' )
  config.resolve.alias['components'] = path.join( __dirname ,  '..', 'src', 'components' )
  config.resolve.alias['service'] = path.join( __dirname ,  '..', 'src', 'service' )
  config.resolve.alias['pages'] = path.join( __dirname ,  '..', 'src', 'pages' )
  config.resolve.alias['layouts'] = path.join( __dirname ,  '..', 'src', 'layouts' )

  return config
}
