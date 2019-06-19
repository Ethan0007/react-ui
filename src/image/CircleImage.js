import React, { Component } from 'react'
import BorderBox from '../box/BorderBox'
import Image from '../Image'

export default class CircleImage extends Component {
  render() {
    const size = this.props.size || 50
    return (
      <BorderBox
        borderRadius={this.props.size * 0.75}
        overflow="hidden"
        {...this.props}
      >
        <Image
          width={size}
          height={size}
          source={this.props.source}
        />
      </BorderBox>
    )
  }
}
