import '../../styles/main.css'

import { graphql } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'

import LocaleSwitch from '@/components/LocaleSwitch/LocaleSwitch'
import { COLOR_PRIMARY_DARK_BACKGROUND } from '@/styles/colors'
import { STYLE_NAV_HEIGHT, STYLE_SIDEBAR_WIDTH } from '@/styles/styles'

import Flex from '../Flex/Flex'
import HeadHelmet from '../HeadHelmet'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'

class Props {
  enableSidebar?: boolean = false
  categoryKey?: string
  slug?: string
  renderCategory?: Function
  pageContext?: any
}

export default class Layout extends Component<Props, any> {
  render() {
    const { enableSidebar, categoryKey, slug, renderCategory } = this.props
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <HeadHelmet pageContext={this.props.pageContext}/>
        <Header slug={slug} pageContext={this.props.pageContext} />

       

        <Flex height={`calc( 100% - ${STYLE_NAV_HEIGHT}px )`}>
          {enableSidebar && (
            <div
              style={{
                boxSizing: "border-box",
                width: `${STYLE_SIDEBAR_WIDTH}px`,
                height: "100%",
                padding: "40px 0 0 0",
                overflow: "auto",
                background: "white",
                borderRight: "1px solid #e8e8e8"
              }}
            >
              {renderCategory && renderCategory()}
            </div>
          )}
          <div
            style={{
              boxSizing: "border-box",
              width: enableSidebar
                ? `calc(100% - ${STYLE_SIDEBAR_WIDTH}px)`
                : "100%",
              height: "100%",
              background: "white",
              overflow: "auto"
            }}
          >
            {this.props.children}
          </div>
        </Flex>

        <Footer />
      </div>
    )
  }
}

