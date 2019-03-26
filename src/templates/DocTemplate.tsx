import '../styles/markdown.css'

import { graphql } from 'gatsby'
import Prism from 'prismjs'
import React, { Component } from 'react'

import { CategoryType } from '@/__typings__/Category'
import Category from '@/components/Category/Category'
import Layout from '@/components/Layout/Layout'
import markdownCSS from '@/styles/emotion/markdown'
import { BACKGROUND, STYLE_SIDEBAR_WIDTH } from '@/styles/styles'
import DefaultProps from '@/utils/DefaultProps'
import { css } from '@emotion/core'

import TableOfContents from './TableOfContents'

class Props extends DefaultProps {
  pageContext: any
}

class State {}

export default class DocTemplate extends Component<Props, State> {
  componentDidMount() {
    Prism.highlightAll()    
  }

  render() {
    const { categories = [], pathname } = this.props.pageContext
    const { markdownRemark } = this.props.data
    const { html, frontmatter={}, headings, fields } = markdownRemark
    const { title, categoryKey } = frontmatter
    const { slug } =fields

    return (
      <Layout enableSidebar={true} categoryKey={categoryKey} slug={ slug } pageContext={this.props.pageContext} renderCategory={
        () => categories.map( (category, index) => <Category key={ index } category={ category } pathname={pathname}/> )
      }>
        <div
          css={css`
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            width: 100%;
            min-height: 100%;
            padding: 40px 20px 40px 80px;
            background:${BACKGROUND};
            /* overflow: auto; */
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              padding-bottom: '40px';
              max-width: calc(980px - ${STYLE_SIDEBAR_WIDTH}px);
            `}
          >
            <div
              className="markdown-body"
              css={markdownCSS}
              dangerouslySetInnerHTML={{
                __html: html
              }}
            />
          </div>

          {/* Table of contents */}
          {/* <div css={css`
            width: 200px;
            height: 300px;
            border: 1px solid #2e2e2e;
          `}>
            <TableOfContents headings={ headings }/>
          </div> */}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
        depth
      }
      fields {
        slug
      }
    }
  }
`
