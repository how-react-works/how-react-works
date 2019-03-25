const path = require( 'path' )

module.exports = ( {
  stage,
  rules,
  loaders,
  plugins,
  actions,
} ) => {
  actions.setWebpackConfig( {
    resolve: {
      extensions: [ ".ts", ".tsx", ".js" ],
      alias     : {
        '@'      : path.resolve( __dirname, '../src' ),
        '@locale': path.resolve( __dirname, '../locale' ),
      }
    }
  } )
}
