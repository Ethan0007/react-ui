import styled from 'styled-components/native'
import {
  compose,
  variant,
  color,
  space,
  borders,
  height
} from 'styled-system'

const shadows = variant({
  // theme key for variant definitions
  key: 'shadows',
  // component prop
  prop: 'shadow',
})

const BaseBox = styled.View(
  // Default props
  {},
  // Available props
  compose(
    color,
    space,
    borders,
    height,
    shadows
  )
)

export default BaseBox
