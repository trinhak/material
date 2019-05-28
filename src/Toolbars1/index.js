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
    constructor(props) {
        super(props);
    
        this.offset = 0;
        this.scrollDirection = 0;
    
        this.state = {
            title: null
        };
    }

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
                        centerElement= {this.state.title || "With menu"}
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'] },
                        }}
                    />
                </View>
            </Container>
        );
    }
}


export default ToolbarSpec;
