import React, { Component } from 'react'
import Text from '../Text'
import BorderBox from '../box/BorderBox'

export default class PillText extends Component {
  render() {
    return (
      <BorderBox
        borderRadius="50"
        bg="#333"
        px="3"
        py="1"
        {...this.props}
      >
        <Text
          color="#eee"
          {...this.props}
          numberOfLines={1}
          bg={undefined}
        >
          {this.props.children}
        </Text>
      </BorderBox>
    )
  }
}
