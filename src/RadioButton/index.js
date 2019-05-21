import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { RadioButton, Toolbar } from 'react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
        flex: 1
    },
});


class RadioButtonSpec extends Component {
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
                    centerElement="Radio button"
                />
                <View style={styles.container}>
                    <RadioButton
                        label="Unchecked"
                        checked={this.state.checked}
                        value="Value"
                        onCheck={checked => this.setState({ checked })}
                        onSelect={() => {}}
                    />
                    <RadioButton label="Checked by default" checked value="Value" onSelect={() => {}} />
                    <RadioButton
                        label="Custom icon"
                        checked
                        uncheckedIcon="star-border"
                        checkedIcon="star"
                        value="Value"
                        onSelect={() => {}}
                    />
                    <RadioButton label="Disabled unchecked" disabled value="Value" onSelect={() => {}} />
                    <RadioButton label="Disabled checked" checked disabled value="Value" onSelect={() => {}} />
                </View>
            </Container>
        );
    }
}


export default RadioButtonSpec;
