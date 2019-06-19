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
        border="1px solid"
        borderColor="blue.0"
        color="blue.0"
        bg="white.0"
        {...this.props}>
        {this.props.children}
      </PillText>
    )
  }
}
