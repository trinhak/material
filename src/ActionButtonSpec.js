import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { ActionButton, Toolbar } from 'react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class ActionButtonSpec extends Component {
  static navigationOptions = {
    header: null
  }
    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Action buttons"
                />

                <ActionButton
                    actions={['email', 'phone', 'sms', 'favorite']}
                    icon="share"
                    transition="toolbar"
                />
            </View>
        );
    }
}


export default ActionButtonSpec;