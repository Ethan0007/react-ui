import styled from 'styled-components/native'
import { Animated } from 'react-native'
import {
  compose,
  color,
  space,
  borders,
  height
} from 'styled-system'

const AnimBaseBox = styled(Animated.View)(
  compose(
    color,
    space,
    borders,
    height
  )
)

export default AnimBaseBox
