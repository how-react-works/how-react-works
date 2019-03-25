const FS = require( 'fs-extra' )
const { PUBLIC, WEBSITE } = require( './paths' )

module.exports = function() {
  return new Promise( resolve => {
    FS.copy( PUBLIC, WEBSITE, err => {
      if ( err ) { console.log( err ) }
      resolve()
    } )
  } )
}