import * as namesMap from './names'

export const CN = 'cn'

const map = {
  [ namesMap.ZH_CN ]: CN
}

export const localeNameToDecoratedNameMap = ( () => {
  let res = {}
  for ( const key in namesMap ) {
    const value = namesMap[ key ]
    res[ value ] = map[ value ] != null ? map[ value ] : value
  }
  return res
} )()

export const localeDecoratedNameToName = ( () => {
  let res = {}
  for ( let key in localeNameToDecoratedNameMap ) {
    res[ localeNameToDecoratedNameMap[ key ] ] = key
  }
  return res
} )()



