import styled from 'styled-components/native'
import BaseBox from './BaseBox'
import {
  compose,
  style,
  width,
  order,
  alignSelf,
  flexBasis
} from 'styled-system'

const flexGrow = style({
  prop: 'flexGrow'
})

const flexShrink = style({
  prop: 'flexShrink'
})

const FlexItem = styled(BaseBox)(
  compose(
    flexGrow,
    flexShrink,
    width,
    order,
    alignSelf,
    flexBasis
  )
)

export default FlexItem
