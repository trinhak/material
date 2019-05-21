/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from "./src/Home";
import Setting from "./src/Setting";
import ActionButtonSpec from "./src/ActionButtonSpec";
import Button from "./src/Button";
import Card from "./src/Card";
import Checkbox from "./src/Checkbox";
import Dialog from "./src/Dialog";
import IconToggle from "./src/IconToggle";
import List from "./src/List";
import RadioButton from "./src/RadioButton";
import Toolbars from "./src/Toolbars";
import Avatar from "./src/Avatar";
import Badge from "./src/Badge";
import BottomNavigation from "./src/BottomNavigation";
import Drawer from "./src/Drawer";

import { createStackNavigator, createAppContainer } from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: Setting,
    actionButtonSpec: ActionButtonSpec,

    avatar: { screen: Avatar },
    button: { screen: Button },
    card: { screen: Card },
    checkbox: { screen: Checkbox },
    dialog: { screen: Dialog },
    iconToggle: { screen: IconToggle },
    list: { screen: List },
    radioButton: { screen: RadioButton },
    toolbar: { screen: Toolbars },
    bottomNavigation: { screen: BottomNavigation },
    drawer: { screen: Drawer },
    badge: { screen: Badge },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

type Props = {};
export default class App extends Component<Props> {


  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
