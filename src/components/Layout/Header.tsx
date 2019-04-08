import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'

import { URL_GITHUB, URL_LOGO } from '@/constants/urls'
import { CLASS_EMPTY_LINK } from '@/styles/classNames'
import { COLOR_PRIMARY_TEXT_UNDER_LIGHT } from '@/styles/colors'
import { BACKGROUND, STYLE_NAV_HEIGHT } from '@/styles/styles'
import { css, jsx } from '@emotion/core'

import Flex from '../Flex/Flex'
import LocaleSwitch from '../LocaleSwitch/LocaleSwitch'
import OuterLinkIcon from '../svg/OuterLinkIcon'

class Props {
  slug?: string
  pageContext?: any
}

class State {}

class TypeLink {
  label: string
  to: string
}

export default class Header extends Component<Props, State> {
  get links(): TypeLink[] {
    const { rootPath, texts = {}} = this.props.pageContext
    return [
      {
        label: texts.getStarted,
        to: `${rootPath}get-started`
      }
    ]
  }
  render() {
    const { slug } = this.props
    const { rootPath = "/", texts = {} } = this.props.pageContext
    const isHomePage = !slug

    return (
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: `${STYLE_NAV_HEIGHT}px`,
          padding: "0 80px",
          // background: BACKGROUND,
          ...(isHomePage
            ? {}
            : {
                borderBottom: "1px solid rgba(200,200,200,0.2)"
              })
        }}
      >
        <Link className={CLASS_EMPTY_LINK} to={rootPath}>
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            {/* <img src="/svg/ts.svg" height="24px" /> */}
            {/* <img src={URL_LOGO} width="36px" height="24px" /> */}
            <span
              style={{
                margin: "0 0 0 10px",
                fontSize: "24px",
                fontWeight: "bold",
                color: COLOR_PRIMARY_TEXT_UNDER_LIGHT
              }}
            >
              { texts.siteTitle }
            </span>
          </div>
        </Link>

        <StyledNavLinksWrapper>
          {this.links.map((link, index) => (
            <Link className={CLASS_EMPTY_LINK} key={index} to={link.to}>
              <StyledNavItem
                css={css`
                  ${slug === `${link.to}/` ? "color: #111;" : "color: #757575;"}
                `}
              >
                {link.label}
              </StyledNavItem>
            </Link>
          ))}
          <StyledNavItem>
            <a className={CLASS_EMPTY_LINK} href={URL_GITHUB}>
              Github
            </a>
            <OuterLinkIcon />
          </StyledNavItem>
          <StyledNavItem>
            <LocaleSwitch pageContext={ this.props.pageContext } />
          </StyledNavItem>
        </StyledNavLinksWrapper>
      </div>
    )
  }
}

const StyledNavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledNavItem: any = styled.span`
  margin: 0 50px 0 0;
  color: #757575!important;
  :hover {
    color: #292929!important;
  }
  cursor: pointer;
`
