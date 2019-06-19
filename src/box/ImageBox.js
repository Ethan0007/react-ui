import React, { Component } from 'react'
import styled from 'styled-components/native'
import BaseBox from './BaseBox'
import PositionBox from './PositionBox'
import Image from '../Image'
import {
  compose,
  height,
  width,
  minHeight
} from 'styled-system'

const StyledImageBox = styled(BaseBox)(
  compose(
    width,
    height,
    minHeight
  )
)

export default class ImageBox extends Component {
  render() {
    return (
      <StyledImageBox {...this.props}>
        <PositionBox
          left={0}
          right={0}
          top={0}
          bottom={0}>
          <Image
            source={this.props.source}
            width="100%"
            height={this.props.height || 300} />
        </PositionBox>
        {this.props.children}
      </StyledImageBox>
    )
  }
}
