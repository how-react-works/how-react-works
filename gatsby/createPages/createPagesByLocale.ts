import fs from 'fs'
import path from 'path'

import { PATH_CONTENT, PATH_ROOT } from '../constants'
import { getCategoryYamlRootName } from '../utils/index'
import yamlParser from '../utils/yamlParser'

export default async function createPagesByLocale( locale: string, {
  remarkEdges,
  createPage,
  rootPath,
  categoryYamlEdges,
  commonData = {},
}: any ) {
  // # generate categorys
  class CategoryYamlMap {
    // the parent directory name of `__category__`
    categoryRootName: string
    getCategory: Function
  }
  const categoryYamls: CategoryYamlMap[] = categoryYamlEdges.map( v => {
    const { relativePath } = v.node
    const categoryRootName = getCategoryYamlRootName( relativePath )
    const getCategory = () => {
      const yamlFilePath = path.resolve( PATH_CONTENT, relativePath )
      const text = fs.readFileSync( yamlFilePath )
      try {
        return yamlParser( text )
      } catch( e ) {
        console.log( e )
        return {}
      }
    }
    return { categoryRootName, getCategory }
  } )
  
  // # create every markdown page
  for ( const edge of remarkEdges ) {
    const { slug } = edge.node.fields
    const route = getRemarkRoute( slug )
    const remarkRootName = getRemarkRootName( slug )
    const categoryYaml = categoryYamls.filter( v => v.categoryRootName === remarkRootName )[ 0 ]
    const category = categoryYaml.getCategory()
    const categories = Array.isArray( category ) ? category : [ category ]
    const pathname = `${rootPath}${ route }`
    await createPage( {
      path     : pathname,
      component: path.resolve( __dirname, `../../src/templates/DocTemplate.tsx` ),
      context  : {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: edge.node.fields.slug,
        ...commonData,
        pathname,
        categories,
      },
    } )
  }
}

function getRemarkRoute( slug: string ) {
  const names = slug.split( "/" ).filter( str  => str !== '' )
  return names[ names.length - 2 ]
}

function getRemarkRootName( slug: string ) {
  const names = slug.split( "/" ).filter( str  => str !== '' )
  return names[ 0 ]
}