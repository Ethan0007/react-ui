import * as React from 'react'
import { Component } from 'react'
import Text from './Text'

const sizeMap = [5, 5, 4, 3, 2, 1, 0]

export default class Heading extends Component {
  render() {
    return (
      <Text
        m={0}
        fontSize={sizeMap[this.props.type || 0]}
        fontWeight="bold"
        {...this.props}
      />
    )
  }
}
