/* eslint-disable no-undef */
const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@pages': 'src/pages',
    '@shared': 'src/shared',
    '@mocks': './mocks'
  })(config)

  return config
}
