import React, { Component } from "react"
import DefaultProps from "@/utils/DefaultProps"

class Props extends DefaultProps {
  type?: any

  direction?: string
  valign?: string
  halign?: string
  width?: string
  height?: string
}

class State {}

export default class Flex extends Component<Props, State> {
  render() {
    const {
      type: Type = "div",
      direction = "row",
      valign = "flex-start",
      halign = "flex-start",
      width = '100%',
      height = '100%',
      style,
      ...rest
    } = this.props
    return (
      <Type
        style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: direction === "row" ? halign : valign,
          alignItems: direction === "row" ? valign : halign,
          width,
          height,
          ...style,
        }}
        {...rest}
      />
    )
  }
}
