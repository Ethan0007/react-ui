import React from 'react'
import { Platform, Modal } from 'react-native'
// import _find from 'lodash/find'
import Picker from './Picker'
import {
  View,
  Text,
  FlexBox,
  PositionBox,
  Touchable
} from '..'

function List(props) {
  return <Picker {...props}>
    {props.list.map(item => {
      return (
        <Picker.Item
          key={item[props.codeKey || 'code']}
          label={item[props.labelKey || 'label']}
          value={item[props.codeKey || 'code']} />
      )
    })}
  </Picker>
}

class ListPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { focus: false }
  }
  render() {
    const list = this.props.list || []
    const selectedItem = list.find(o => o[this.props.codeKey || 'code'] === this.props.selectedValue)
    // const selectedItem = _find(list, [this.props.codeKey || 'code', this.props.selectedValue]) || {}
    return Platform.OS === 'android' ?
      <List {...this.props} /> :
      <View>
        <Touchable onPress={() => this.props.enabled && list.length && this.setState({ focus: true })}>
          <FlexBox alignItems="center" {...this.props}>
            <Text fontSize={this.props.fontSize} color={this.props.color}>
              {
                !list.length ? '' : selectedItem[this.props.labelKey || 'label']
              }
              &nbsp;
            </Text>
          </FlexBox>
        </Touchable>
        {
          this.state.focus &&
          <Modal transparent={true}>
            <PositionBox
              bg="white.0"
              height={300}
              bottom={0}
              width="100%">
              <FlexBox
                bg="white.1"
                px={2}
                justifyContent="flex-end">
                <Touchable onPress={() => this.setState({ focus: false })}>
                  <Text px={3} py={2} fontSize={3} color="blue.0">Done</Text>
                </Touchable>
              </FlexBox>
              <List {...this.props} />
            </PositionBox>
          </Modal>
        }
      </View >
  }
}

export default ListPicker