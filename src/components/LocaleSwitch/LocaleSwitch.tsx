import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'

import { CLASS_EMPTY_LINK } from '@/styles/classNames'
import DefaultProps from '@/utils/DefaultProps'
import { localeNameToDecoratedNameMap } from '@locale/decoratedNames'
import * as namesMap from '@locale/names'

class Props extends DefaultProps {
  pageContext: any
}

class State {
  
}

class Lang {
  label: string
  link: string
}

const langMap = {
  [namesMap.EN]: "ENGLISH",
  [namesMap.ZH_CN]: "中文版"
}


export default class LocaleSwitch extends Component<Props, State> {
  get langs(): Lang[] {
    const { locale } = this.props.pageContext
    const filteredLocales = Object.values( namesMap ).filter( v => v !== locale )
    const res = filteredLocales.map( (v: any) => ({
      label: langMap[ v ],
      link: this.getLink( v )
    }) )
    return res
  }

  getLink( targetLocale ): string {
    const { locale: currentLocale } = this.props.pageContext
    const decoratedName = localeNameToDecoratedNameMap[ targetLocale ]
    const { pathname = '' } = this.props.pageContext
    if (currentLocale === namesMap.EN) {
      return `/${decoratedName}${pathname}`
    }
    if (currentLocale !== namesMap.EN) {
      const pathnames = pathname.split("/")
      const end = pathnames.slice(2, pathnames.length).join("/")
      if (targetLocale === namesMap.EN) {
        return `/${end}`
      }
      if ( targetLocale !== namesMap.EN ) {
        return `/${decoratedName}/${end}`
      }
    }
    return
  }


  render() {
    const { locale } = this.props.pageContext
    return <StyledRoot>{
      this.langs.map( (v, index) => <StyledLinkWrapper key={index}><Link className={CLASS_EMPTY_LINK} to={ v.link }>{ v.label }</Link></StyledLinkWrapper> )
    }</StyledRoot>
  }
}

const StyledRoot = styled.span`
  display: inline-flex;
  align-items: center;
`
const StyledLinkWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 13px;
  color: royalblue;
  :hover {
    text-decoration: underline;
  }
`
