import React, { Component } from 'react'

import DefaultProps from '@/utils/DefaultProps'

interface Heading {
  value: string
  depth: number
}

class Props extends DefaultProps {
  headings: Heading[]
}

class State {}

interface Category {
  value: string
  depth: number
  items: Category[]
  foldable?: boolean
}

export default class TableOfContents extends Component<Props, State> {
  get categories(): Category[] {
    const { headings } = this.props
    let categories: Category[] = []

    // let root
    let root: Category = {
      value: "",
      depth: 1,
      items: []
    }

    headings.forEach(heading => {
      addHeading(root, heading)
    })

    function addHeading(category: Category, heading: Heading) {
      const lastItem = category.items[category.items.length - 1]
      if (lastItem == null) {
        category.items.push({ ...heading, items: [] })
        category.foldable = true
      } else {
        if (lastItem.depth >= heading.depth) {
          category.items.push({ ...heading, items: [] })
          category.foldable = true
        } else {
          addHeading(lastItem, heading)
        }
      }
    }

    return root.items
  }

  render() {
    return this.categories.map((category, index) => (
      <Item key={index} category={category} />
    ))
  }
}

class Item extends Component<{ category: Category }, { isFolded: boolean }> {
  state = {
    isFolded: false
  }
  onFoldIconClick = () => {
    this.setState(prev => ({
      isFolded: !prev.isFolded
    }))
  }
  render() {
    const { category } = this.props
    const { value, depth, items, foldable = false } = category
    const { isFolded } = this.state
    return (
      <div>
        <div
          style={{
            fontSize: `${50 - depth* 5}px`
          }}
        >
          { value }

          { 
            foldable && (
              !isFolded ? (
                <span onClick={this.onFoldIconClick}>∧</span>
              ) : (
                <span onClick={this.onFoldIconClick}>∨</span>
              )
            )
          }
        </div>
        {! isFolded && items.map((item, index) => (
          <Item key={index} category={item} />
        ))}
      </div>
    )
  }
}
