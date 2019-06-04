const path = require('path');

const config = require('carbon-factory/webpack.config')({
  parcelifyPaths: [
    path.resolve(process.cwd(), 'node_modules/carbon-react')
  ],
  singlePageApp: true
});

module.exports = config;
