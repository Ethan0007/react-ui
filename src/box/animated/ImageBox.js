import React, { Component } from 'react'
import styled from 'styled-components/native'
import BaseBox from './BaseBox'
import PositionBox from './PositionBox'
import Image from '../../Image'
import {
  compose,
  height,
  width
} from 'styled-system'

const StyledImageBox = styled(BaseBox)(
  compose(
    width,
    height
  )
)

export default class ImageBox extends Component {
  render() {
    return (
      <StyledImageBox {...this.props}>
        <PositionBox left="0" right="0">
          <Image
            source={this.props.source}
            width="100%"
            height="300" />
        </PositionBox>
        {this.props.children}
      </StyledImageBox>
    )
  }
}
