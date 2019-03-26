import path from 'path'

import { i18nContents } from '../../../i18n-sync/src/index'

export default function i18n() {
  
  const locales = [ 'en', 'cn' ]
  const backupName = '.backup'
  const syncConfig = {
    enableTranslation: true
  }
  // # markdown
  {
    const source = path.resolve( __dirname, '../contents' )
    const target = path.resolve( __dirname, '../build-contents' )
    const extension = '.md'
    const config = {
      locales,
      extension,
      backupName,
      syncConfig
    }
    i18nContents( source, target, config )
  }
  

  // # yml: category
  {
    const source = path.resolve( __dirname, '../contents' )
    const target = path.resolve( __dirname, '../build-contents' )
    const extension = '.yml'
    const config = {
      locales,
      extension,
      backupName,
      syncConfig
    }
    i18nContents( source, target, config )
  }

  // # locale
  {
    // const source = path.resolve( __dirname, '../contents' )
    // const target = path.resolve( __dirname, '../build-contents' )
    // const extension = '.yml'
    // const config = {
    //   locales,
    //   extension,
    //   backupName,
    //   syncConfig
    // }
    // i18nContents( source, target, config )
  }
}

i18n()