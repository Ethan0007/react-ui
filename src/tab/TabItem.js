import React from 'react'
import {
  View,
  Text
} from 'react-ui'

export default class Tab extends React.Component {
  render() {
    return (
      <View py={2} px={3}>
        {this.props.icon}
        <Text color={this.props.color || 'white.0'}>{this.props.title}</Text>
      </View>
    )
  }
}