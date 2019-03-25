export function getFileName( path: string ) {
  const names = path.split( "/" ).filter( str  => str !== '' )
  return names[ names.length - 1 ]
}

export function getCategoryYamlParentName( relativePath ) {
  const names = relativePath.split( '/' ).filter( str  => str !== '' )
  return names[ names.length - 2 ]
}
export function getCategoryYamlRootName( relativePath ) {
  const names = relativePath.split( '/' ).filter( str  => str !== '' )
  return names[ names.length - 3 ]
}