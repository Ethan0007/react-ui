import React from 'react'
import BorderBox from './BorderBox'
import { FlexBox } from '..'


export default function (props) {
  const size = props.size || 50
  return (
    <BorderBox
      width={size}
      height={size}
      borderRadius={size * 0.6}
      {...props}>
      <FlexBox
        justifyContent="center"
        alignItems="center"
        height="100%">
        {props.children}
      </FlexBox>
    </BorderBox>
  )
}
