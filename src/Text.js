import styled from 'styled-components/native'
import {
  color,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  fontSize,
  alignSelf,
  space,
  fontStyle
} from 'styled-system'

const textDecorationLine = style({ prop: 'textDecorationLine' })

const StyledText = styled.Text(
  {},
  color,
  space,
  fontFamily,
  fontWeight,
  fontSize,
  textAlign,
  lineHeight,
  letterSpacing,
  alignSelf,
  textDecorationLine,
  fontStyle
)

export default StyledText
