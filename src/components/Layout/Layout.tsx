import '../../styles/main.css'

import { graphql } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'

import LocaleSwitch from '@/components/LocaleSwitch/LocaleSwitch'
import { COLOR_PRIMARY_DARK_BACKGROUND } from '@/styles/colors'
import { BACKGROUND, STYLE_NAV_HEIGHT, STYLE_SIDEBAR_WIDTH } from '@/styles/styles'

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
    const { rootPath, pathname } = this.props.pageContext
    const isRootPage = rootPath === pathname
    return (
      <StyledRoot isRootPage={isRootPage}>
        <StyledContentWrapper isRootPage={isRootPage}>
          <HeadHelmet pageContext={this.props.pageContext} />
          <Header slug={slug} pageContext={this.props.pageContext} />

          <Flex height={`calc( 100% - ${STYLE_NAV_HEIGHT}px )`}>
            {enableSidebar && (
              <div
                style={{
                  boxSizing: "border-box",
                  width: `${STYLE_SIDEBAR_WIDTH}px`,
                  height: "100%",
                  padding: "40px 0 0 0",
                  background: BACKGROUND,
                  borderRight: "1px solid rgba(200,200,200,0.2)",
                  overflow: "auto"
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
                // background: BACKGROUND,
                overflow: "auto"
              }}
            >
              {this.props.children}
            </div>
          </Flex>

          <Footer />
        </StyledContentWrapper>
      </StyledRoot>
    )
  }
}

const StyledRoot: any = styled.div`
  width: 100%;
  height: 100%;
  ${props =>
    true
      ? `background: no-repeat center / cover url('https://terry-su.github.io/CDN/images/how-react-works/homeBackground.jpg')`
      : ``};
`

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${props => (! props.isRootPage ? `background: rgba(255, 255, 255, 0.8)` : ``)}
`

