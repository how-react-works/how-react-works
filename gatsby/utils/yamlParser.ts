import yaml from 'js-yaml'

export default function( text ) {
  return yaml.safeLoad( text )
}