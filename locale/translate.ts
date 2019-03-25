import en from './locales/en'
import zh_CN from './locales/zh_CN'
import { EN, ZH_CN } from './names'

const localeMap = {
  [ EN ]   : en,
  [ ZH_CN ]: zh_CN
}
export default function translate( locale: string, key: string = '' ) {
  try {
    let res = localeMap[ locale ]
    key.split( '.' ).filter( v => v !== '' ).forEach( str => {
      res = res[ str ]
    } )
    return res != null ? res : key
  } catch ( e ) {
    console.log( e )
    return key
  }
}