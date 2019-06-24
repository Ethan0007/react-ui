import * as React from 'react'
import { Component } from 'react'
import styled, { withTheme } from 'styled-components/native'
import { compose, color, textAlign, space, themeGet } from 'styled-system'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Foundation from 'react-native-vector-icons/Foundation'

const props = [compose(color, textAlign, space)]

const StyledSimpleLineIcons = styled(SimpleLineIcons).apply(null, props)
const StyledFoundation = styled(Foundation).apply(null, props)
const StyledMaterialIcons = styled(MaterialIcons).apply(null, props)
const StyledMaterialCommunityIcons = styled(MaterialCommunityIcons).apply(null, props)

class Icon extends Component {
  render() {
    let IconSet
    switch (this.props.set) {
      case 'SimpleLineIcons': IconSet = StyledSimpleLineIcons; break
      case 'Foundation': IconSet = StyledFoundation; break
      case 'MaterialCommunityIcons': IconSet = StyledMaterialCommunityIcons; break
      default: IconSet = StyledMaterialIcons; break
    }
    return (
      <IconSet
        textAlign="center"
        size={28}
        {...this.props}
        color={themeGet('colors.' + (this.props.color || 'black.3'))(this.props)}
      />
    )
  }
}

export default withTheme(Icon)