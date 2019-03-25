import { Link } from 'gatsby'
import React, { Component } from 'react'

import Layout from '@/components/Layout/Layout'
import { URL_HOME_BG } from '@/constants/urls'
import { CLASS_EMPTY_LINK } from '@/styles/classNames'
import {
    COLOR_PRIMARY_DARK_BACKGROUND, COLOR_PRIMARY_TEXT_UNDER_DARK, COLOR_PRIMARY_TEXT_UNDER_LIGHT
} from '@/styles/colors'
import DefaultProps from '@/utils/DefaultProps'

class Props extends DefaultProps {
  pageContext: any
}

class State {}

export default class Home extends Component<Props, State> {
  render() {
    const { texts = '', rootPath } = this.props.pageContext
    return (
      <Layout pageContext={this.props.pageContext}>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "100%",
            background: `no-repeat center / cover url('${URL_HOME_BG}')`
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              width: '100%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <span style={{
                color: COLOR_PRIMARY_TEXT_UNDER_DARK,
                fontSize: '60px',
                fontWeight: 'bold',
              }}>TSDOCS</span>
              <p style={{
                fontSize: '30px',
                color: COLOR_PRIMARY_DARK_BACKGROUND,
              }}>{  texts.home.introduction }</p>
              <Link className={ CLASS_EMPTY_LINK } to={ `${rootPath}get-started` }>
              <div style={{
                padding: '15px 20px',
                fontSize: '20px',
                borderRadius: '3px',
                color: 'rgba(255, 255, 255, 0.9)',
                background: COLOR_PRIMARY_TEXT_UNDER_DARK,
                cursor: 'pointer',
              }}>{ texts.getStarted }</div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
