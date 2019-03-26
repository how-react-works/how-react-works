import i18n from './i18n'

const trash = require( "trash" )
const { PUBLIC, CACHE } = require( './paths' )
module.exports = async function() {
  i18n
  await trash( CACHE )
}

