import { graphql, StaticQuery } from 'gatsby'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import { URL_FAVICON } from '@/constants/urls'
import DefaultProps from '@/utils/DefaultProps'

class Props extends DefaultProps {
  pageContext: any
}

class State {
  
}

export default class HeadHelmet extends Component<Props, State> {
  render() {
    const { texts } = this.props.pageContext
    return  <Helmet defaultTitle={texts.siteTitle} titleTemplate={`%s | ${texts.siteTitle}`}>
          <html lang="en" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
          />
  
          <link rel="icon" href={ URL_FAVICON } />
        </Helmet>
  }
}