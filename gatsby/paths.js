const path = require( 'path' )

module.exports = {
  CACHE  : path.resolve( __dirname, '../.cache' ),
  PUBLIC : path.resolve( __dirname, '../public' ),
  WEBSITE: path.resolve( __dirname, '../tsdocs-site' ),
}