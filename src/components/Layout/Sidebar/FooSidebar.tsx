import { graphql, Link, StaticQuery } from 'gatsby'
import React, { Component } from 'react'

import Category from '@/components/Category/Category'
import Flex from '@/components/Flex/Flex'

class Props {
  slug?: string
}

class State {
  
}



export default class FooSidebar extends Component<Props, State> {
  render() {
    const { slug } = this.props
    return <div/>
      // <StaticQuery
      //   query={graphql`
      //     query HeadingQuery {
      //       allFooNavYaml {
      //         edges {
      //           node {
      //             label
      //             foldable
      //             items {
      //               label
      //               foldable
      //               href
      //               items {
      //                 label
      //                 href
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `}
      //   render={ data => {
      //     return <Flex
      //     direction="column"
      //     halign="flex-start"
      //     style={{
      //       // background: "#f7f7f7"
      //     }}
      //   >
      //     <Category category={ data.allFooNavYaml.edges[ 0 ].node } slug={ slug }/>
      //   </Flex>
      //   } }
      // />
  }
}