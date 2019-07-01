import React from 'react'
import Text from '../Text'
import Touchable from '../Touchable'
import BorderBox from '../box/BorderBox'

export default function (props) {
  return (
    <Touchable onPress={props.onPress}>
      <BorderBox
        px={3}
        py={2}
        bg="prime.0"
        borderRadius={4}
        shadow={1}
        {...props}>
        <FlexBox alignItems="center" justifyContent="center">
          {props.icon}
          <Text
            fontSize={props.textSize || 2}
            color={props.textColor || 'white.0'}>
            {props.children}
          </Text>
        </FlexBox>
      </BorderBox>
    </Touchable>
  )
}
