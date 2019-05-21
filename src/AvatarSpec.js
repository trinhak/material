import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { Avatar, Subheader, Toolbar } from 'react-native-material-ui/src';

const styles = StyleSheet.create({
    avatarContainer: {
        paddingLeft: 16,
    },
});


class AvatarSpec extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Avatar"
                />
                <Subheader text="Avatars with text" />
                <View style={styles.avatarContainer}>
                    <Avatar text="C" />
                </View>
                <Subheader text="Avatars with icon" />
                <View style={styles.avatarContainer}>
                    <Avatar icon="person" />
                </View>
            </View>
        );
    }
}

export default AvatarSpec;