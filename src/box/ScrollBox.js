import styled from 'styled-components/native'
import {
  compose,
  color,
  space,
  borders,
  height
} from 'styled-system'

const ScrollBox = styled.ScrollView(
  compose(
    color,
    space,
    borders,
    height
  )
)

export default ScrollBox
