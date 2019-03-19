const { join } = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        join(__dirname, '.'),
        join(__dirname, 'src'),
        join(__dirname, 'data'),
        'node_modules'
      ],
    },
  })
}
