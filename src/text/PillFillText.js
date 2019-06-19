import React, { Component } from 'react'
import PillText from './PillText'

export default class PillBorderText extends Component {
  render() {
    return (
      <PillText
        fontSize={10}
        fontWeight="bold"
        px="6px"
        py="1px"
        textAlign="center"
        color="white.0"
        bg="blue.0"
        {...this.props}>
        {this.props.children}
      </PillText>
    )
  }
}
