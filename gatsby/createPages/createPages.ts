import path from 'path'

import { localeNameToDecoratedNameMap } from '../../locale/decoratedNames'
import * as localeNamesMap from '../../locale/names'
import translate from '../../locale/translate'
import { CATEGORY_FOLDER_NAME } from '../constants'
import { getCategoryYamlParentName, getFileName } from '../utils/index'
import createPagesByLocale from './createPagesByLocale'

module.exports = ( { graphql, actions } ) => {
  const { createPage, deletePage } = actions

  return new Promise( ( resolve, reject ) => {
    graphql( `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allFile {
          edges {
            node {
              relativePath
              extension
              name
            }
          }
        }
      }
    ` ).then( async function( result ) {
      const allYamlEdges = result.data.allFile.edges.filter(
        v => v.node.extension === "yml"
      )

      for ( const locale of Object.values( localeNamesMap ) ) {
        const decoratedLocale = localeNameToDecoratedNameMap[ locale ]
        const t = ( key = '' ) => translate( locale, key )
        const rootPath =
          locale === localeNamesMap.EN ? "/" : `/${decoratedLocale}/`

        // # category
        const categoryYamlEdges = allYamlEdges.filter( v => {
          return (
            v.node.name === decoratedLocale &&
            getCategoryYamlParentName( v.node.relativePath ) ===
              CATEGORY_FOLDER_NAME
          )
        } )

        // # get commmon data
        const commonData = {
          rootPath,
          locale,
          decoratedLocale,
          texts: t()
        }

        // # create home page
        await createPage( {
          path     : rootPath,
          component: path.resolve( __dirname, "../../src/pages/Home/Home.tsx" ),
          context  : {
            ...commonData,
            pathname: rootPath,
          }
        } )



        // # create markdown pages
        const remarkEdges = await result.data.allMarkdownRemark.edges.filter( v => {
          const name = getFileName( v.node.fields.slug )
          return name === decoratedLocale
        } )

        await createPagesByLocale( locale, {
          remarkEdges,
          createPage,
          rootPath,
          categoryYamlEdges,
          commonData
        } )
      }

      resolve()
    } )
  } )
}
