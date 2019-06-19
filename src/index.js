import { Animated } from 'react-native'
import { withTheme } from 'styled-components'
import { themeGet } from 'styled-system'
import Icon from './Icon'
import Touchable from './Touchable'
import Stars from './Stars'
// Boxes
import ScrollBox from './box/ScrollBox'
import BaseBox from './box/BaseBox'
import LayoutBox from './box/LayoutBox'
import FlexBox from './box/FlexBox'
import FlexItem from './box/FlexItem'
import PositionBox from './box/PositionBox'
import BorderBox from './box/BorderBox'
import ImageBox from './box/ImageBox'
import CircleBox from './box/CircleBox'
// Animated Boxes
import AnimBaseBox from './box/animated/BaseBox'
import AnimScrollBox from './box/animated/ScrollBox'
import AnimPositionBox from './box/animated/PositionBox'
// Texts
import Text from './Text'
import Heading from './Heading'
import PillText from './text/PillText'
import PillBorderText from './text/PillBorderText'
import PillFillText from './text/PillFillText'
// Buttons
import IconButton from './button/IconButton'
import TextButton from './button/TextButton'
import Spinner from './Spinner'
// Images
import Image from './Image'
import CircleImage from './image/CircleImage'
// Inputs
import TextInput from './input/TextInput'


const LocalAnimated = {
  Native: Animated,
  BaseBox: AnimBaseBox,
  ScrollBox: AnimScrollBox,
  PositionBox: AnimPositionBox
}

export {
  withTheme,
  themeGet,
  Spinner,
  // Others
  Stars,
  Icon,
  Touchable,
  // Boxes
  LayoutBox as View,
  LayoutBox,
  ScrollBox,
  BaseBox,
  FlexBox,
  FlexItem,
  PositionBox,
  BorderBox,
  ImageBox,
  CircleBox,
  // Texts
  Heading,
  Text as TextBox,
  Text,
  PillText,
  PillBorderText,
  PillFillText,
  // Buttons
  IconButton,
  TextButton,
  // Images
  Image,
  CircleImage,
  // Animated
  LocalAnimated as Animated,
  // Input
  TextInput
}