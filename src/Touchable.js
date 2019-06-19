import * as React from 'react'
import { Component } from 'react'

import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

export default class Touchable extends Component {
  render() {
    const TouchableNative = Platform.OS === 'android'
      ? TouchableNativeFeedback
      : TouchableOpacity
    return (
      <TouchableNative onPress={this.props.onPress}>
        {this.props.children}
      </TouchableNative>
    )
  }
}
