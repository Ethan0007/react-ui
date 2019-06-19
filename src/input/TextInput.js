import styled from 'styled-components/native'
import {
  color,
  space,
  borders,
  height,
  width,
  fontWeight,
  fontSize,
} from 'styled-system'

// const shadowColor = style({ prop: 'shadowColor' })
// const shadowOffset = style({ prop: 'shadowOffset' })
// const shadowOpacity = style({ prop: 'shadowOpacity' })
// const shadowRadius = style({ prop: 'shadowRadius' })

const StyledTextInput = styled.TextInput(
  // Default props
  {},
  // Available props
  color,
  space,
  borders,
  height,
  width,
  fontWeight,
  fontSize,
)

export default StyledTextInput
