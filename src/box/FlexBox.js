import styled from 'styled-components/native'
import BaseBox from './BaseBox'
import {
  compose,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
} from 'styled-system'

const FlexBox = styled(BaseBox)(
  compose(
    flexDirection,
    alignItems,
    alignContent,
    justifyContent,
    flexWrap
  )
)

FlexBox.defaultProps = {
  flexDirection: 'row'
}

export default FlexBox
