import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Toolbar } from "react-native-material-ui";

// import { Container } from './styles';

export default class Setting extends Component {
  render() {
    return (
      <View>
        <Toolbar
          key="toolbar"
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.openDrawer()}
          centerElement="Setting"
      />
      </View>
    );
  }
}
