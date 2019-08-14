import styled from 'styled-components/native'
import {
  compose,
  space,
  color,
  borders,
  width,
  height
} from 'styled-system'

import {
  View as BaseView,
  Text as BaseText,
  Icon as BaseIcon,
  Button as BaseButton,
} from 'native-base'

import {
  Grid as BaseGrid,
  Col as BaseCol,
  Row as BaseRow
} from 'react-native-easy-grid'

const styleText = compose(
  space,
  color
)

const styleBox = compose(
  space,
  color,
  borders,
  height
)

const styleGrid = compose(
  space,
  width,
  height
)

const Grid = styled(BaseGrid)(styleGrid)
const Col = styled(BaseCol)(styleGrid)
const Row = styled(BaseRow)(styleGrid)

const View = styled(BaseView)(styleBox)
const Text = styled(BaseText)(styleText)
const Icon = styled(BaseIcon)(styleText)
const Button = styled(BaseButton)(styleBox)

export default {
  // Layout
  Grid,
  Col,
  Row,
  // Components
  View,
  Text,
  Icon,
  Button
}
