import React from 'react'
import Stars from 'react-native-stars'
import Icon from '../ui/Icon'

export default props => (
  <Stars
    disabled={true}
    half={true}
    fullStar={<Icon size={props.size || 18} color={props.color} name={'star'} />}
    emptyStar={<Icon size={props.size || 18} color={props.color} name={'star-border'} />}
    halfStar={<Icon size={props.size || 18} color={props.color} name={'star-half'} />}
    {...props}
    default={Math.floor(props.default * 2) / 2}
    display={undefined}
  />
)