import React, { Component } from 'react'

import { URL_TSDOCS } from '@/constants/urls'
import { CLASS_EMPTY_LINK } from '@/styles/classNames'
import { COLOR_PRIMARY_DARK_BACKGROUND, COLOR_PRIMARY_TEXT_UNDER_DARK } from '@/styles/colors'

class Props {

}

class State {
  
}

export default class Footer extends Component<Props, State> {
  render() {
    return <div style={{
      display: 'grid',
      placeItems: 'center',
      padding: '25px 0',
      background: COLOR_PRIMARY_DARK_BACKGROUND,
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.5)'
    }}>
      <span>
      Built with <a className={CLASS_EMPTY_LINK} href={ URL_TSDOCS } style={{
        color: COLOR_PRIMARY_TEXT_UNDER_DARK,
      }}>TSDOCS</a>
      </span>
    </div>
  }
}