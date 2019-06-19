import styled from 'styled-components/native'
import BorderBox from './BorderBox'
import {
  compose,
  position,
  zIndex,
  width,
  top,
  right,
  bottom,
  left,
} from 'styled-system'

const Box = styled(BorderBox)(
  compose(
    position,
    zIndex,
    width,
    top,
    right,
    bottom,
    left
  )
)

Box.defaultProps = {
  position: 'absolute'
}

export default Box
