import React, { Component } from 'react'
import styled from 'styled-components'

import DefaultProps from '@/utils/DefaultProps'

class Props extends DefaultProps {

}

class State {
  
}

export default class Template extends Component<Props, State> {
  render() {
    return <StyledRoot>Template</StyledRoot>
  }
}

const StyledRoot = styled.div``
