import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../Container';

import { Toolbar, Button, COLOR } from 'react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
    },
});


class ToolbarSpec extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Title"
                />
                <View style={styles.container}>
                    <Toolbar
                        leftElement="clear"
                        centerElement="Custom styles"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'] },
                        }}
                        style={{
                            container: { backgroundColor: COLOR.orange300 },
                            leftElement: { color: COLOR.orange900 },
                            titleText: { color: COLOR.orange900 },
                            rightElement: { color: COLOR.orange900 },
                        }}
                        onRightElementPress={() => {}}
                    />
                </View>
            </Container>
        );
    }
}


export default ToolbarSpec;
