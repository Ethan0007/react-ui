import React from 'react'
import Spinner from 'react-native-spinkit'
import { themeGet, withTheme } from './index'

export default withTheme(function (props) {
  return (
    <Spinner
      type={props.type || 'Bounce'}
      color={themeGet('colors.' + (props.color || 'black.10'))(props)}
    />
  )
})