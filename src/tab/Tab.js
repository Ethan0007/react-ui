import React from 'react'
import {
  View,
  Text,
  FlexBox,
  Touchable,
  BorderBox
} from 'react-ui'

export default class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: props.current || 0
    }
  }
  changeTab = index => {
    this.setState(() => ({ current: index }))
    if (this.props.onChangeTab)
      this.props.onChangeTab(index)
  }
  render() {
    const currentChild = this.props.children[this.state.current]
    return (
      <View>
        <FlexBox
          key="tab-bar"
          justifyContent="space-evenly"
          mb={2}
          width="100%">
          {
            this.props.children.map((item, index) => (
              <Touchable
                onPress={() => this.changeTab(index)}
                key={item.props.title}>
                <BorderBox
                  borderRadius={6}
                  px={1}
                  py={1}
                  bg={index === this.state.current ? 'prime.7' : 'transparent'}>
                  {
                    this.props.tabItemComponent ?
                      <this.props.tabItemComponent
                        {...item.props}
                        currentIndex={this.state.current}
                        index={index} /> :
                      <Text color={this.props.tabColor || 'white.1'}>{item.props.title}</Text>
                  }
                </BorderBox>
              </Touchable>
            ))
          }
        </FlexBox>
        <View key={currentChild.title}>
          {currentChild}
        </View>
      </View>
    )
  }
}