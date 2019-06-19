import styled from 'styled-components/native'
import BaseBox from './BaseBox'
import {
  compose,
  width,
  display,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  size
} from 'styled-system'

const LayoutBox = styled(BaseBox)(
  compose(
    width,
    display,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    size
  )
)

export default LayoutBox
