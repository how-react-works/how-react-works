import { graphql, Link, StaticQuery } from 'gatsby'
import React, { Component } from 'react'

import DefaultProps from '@/utils/DefaultProps'

import Flex from '../../Flex/Flex'
import FooSidebar from './FooSidebar'

class Props extends DefaultProps {
  categoryKey?: string
  slug?: string
}

class State {}

export default class Sidebar extends Component<Props, State> {
  render() {
    const { categoryKey, slug } = this.props
    return <FooSidebar slug={slug} />
  }
}
