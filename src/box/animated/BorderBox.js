import styled from 'styled-components/native'
import BaseBox from './BaseBox'
import {
  compose,
  style,
  borderRadius,
  overflow
} from 'styled-system'

const borderBottomLeftRadius = style({ prop: 'borderBottomLeftRadius' })
const borderBottomRightRadius = style({ prop: 'borderBottomRightRadius' })
const borderTopLeftRadius = style({ prop: 'borderTopLeftRadius' })
const borderTopRightRadius = style({ prop: 'borderTopRightRadius' })

const BorderBox = styled(BaseBox)(
  compose(
    overflow,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius
  )
)

BorderBox.defaultProps = {
  overflow: 'hidden'
}

export default BorderBox
