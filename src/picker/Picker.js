import styled from 'styled-components/native'
import {
  height,
  space,
  color,
  borders
} from 'styled-system'

const StyledPicker = styled.Picker(
  height,
  space,
  color,
  borders
)

StyledPicker.Item = styled(StyledPicker.Item)(
  height,
  space,
  color,
  borders
)

export default StyledPicker