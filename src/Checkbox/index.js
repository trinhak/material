import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { Checkbox, Toolbar } from 'react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
        flex: 1
    },
});

class CheckboxSpec extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
    }
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Checkbox"
                />
                <View style={styles.container}>
                    <Checkbox
                        label="Unchecked"
                        checked={this.state.checked}
                        value="Value"
                        onCheck={checked => this.setState({ checked })}
                    />
                    <Checkbox label="Checked by default" checked value="Value" onCheck={() =>{}} />
                    <Checkbox
                        label="Custom icon"
                        checked
                        uncheckedIcon="star-border"
                        checkedIcon="star"
                        value="Value"
                        onCheck={() =>{}}
                    />
                    <Checkbox label="Disabled unchecked" disabled value="Value" onCheck={() =>{}} />
                    <Checkbox label="Disabled checked" checked disabled value="Value" onCheck={() =>{}} />
                </View>
            </Container>
        );
    }
}
export default CheckboxSpec;
