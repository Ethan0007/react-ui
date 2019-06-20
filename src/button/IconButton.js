import React, { Component } from 'react'
import Touchable from '../Touchable'
import Icon from '../Icon'
import BorderBox from '../box/BorderBox'

export default class IconButton extends Component {
  render() {
    return (
      <Touchable onPress={this.props.onPress}>
        <BorderBox p={1} {...this.props}>
          <Icon
            name={this.props.name}
            size={this.props.size || 28}
            color={this.props.color || 'black.3'}
          />
        </BorderBox>
      </Touchable>
    )
  }
}
