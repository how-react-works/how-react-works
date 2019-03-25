const trash = require( "trash" )
const { PUBLIC, CACHE } = require( './paths' )

module.exports = async function() {
  await trash( CACHE )
}

