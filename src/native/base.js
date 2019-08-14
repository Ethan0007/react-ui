import styled from 'styled-components/native'
import {
  compose,
  space,
  color,
  borders,
  height
} from 'styled-system'

import * as Base from 'native-base'

const styleText = compose(
  space,
  color
)

const styleView = compose(
  space,
  color,
  borders,
  height
)

const View = styled(Base.View)(styleView)
const Text = styled(Base.Text)(styleText)
const Icon = styled(Base.Icon)(styleText)
const Button = styled(Base.Button)(styleView)

export * from Base
export {
  View,
  Text,
  Icon,
  Button
}
