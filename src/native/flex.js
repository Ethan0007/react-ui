import { View } from './base'

const Flex = styled(View)(
  compose(
    flexDirection,
    alignItems,
    alignContent,
    justifyContent,
    flexWrap
  )
)

Flex.defaultProps = { flexDirection: 'row' }

const flexGrow = style({
  prop: 'flexGrow'
})

const flexShrink = style({
  prop: 'flexShrink'
})

const Box = styled(View)(
  compose(
    flexGrow,
    flexShrink,
    width,
    order,
    alignSelf,
    flexBasis
  )
)

export default {

  Flex,
  Box

}
