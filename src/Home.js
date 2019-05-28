import React, { Component } from 'react';

import { ToastAndroid, View, TouchableOpacity, ScrollView, Platform, Modal } from 'react-native';
import { BottomNavigation, Icon, ListItem, Avatar, Toolbar, ActionButton } from "react-native-material-ui";

// import { Container } from './styles';

export default class Home extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);

    this.offset = 0;
    this.scrollDirection = 0;

    this.state = {
        selected: [],
        searchText: '',
        active: 'people',
        isDrawer: false
    };
}

onAvatarPressed = (value) => {
  const { selected } = this.state;

  const index = selected.indexOf(value);

  if (index >= 0) {
      // remove item
      selected.splice(index, 1);
  } else {
      // add item
      selected.push(value);
  }

  this.setState({ selected });
}

renderItem = (title, route) => {
  const searchText = this.state.searchText.toLowerCase();

  if (searchText.length > 0 && title.toLowerCase().indexOf(searchText) < 0) {
      return null;
  }

  return (
      <ListItem
          divider
          leftElement={<Avatar text={title[0]} />}
          centerElement={title}
          onLeftElementPress={() => this.onAvatarPressed(title)}
          onPress={() => this.props.navigation.navigate(route)}
      />

  );
}
renderToolbar = () => {
  if (this.state.selected.length > 0) {
      return (
          <Toolbar
              key="toolbar"
              leftElement="clear"
              onLeftElementPress={() => this.setState({ selected: [], isDrawer: true })}
              centerElement={this.state.selected.length.toString()}
              rightElement={['delete']}
              style={{
                  container: { backgroundColor: 'white' },
                  titleText: { color: 'rgba(0,0,0,.87)' },
                  leftElement: { color: 'rgba(0,0,0,.54)' },
                  rightElement: { color: 'rgba(0,0,0,.54)' },
              }}
              onRightElementPress={() => this.setState({ isDrawer: true })}
          />
      );
  }
  return (
      <Toolbar
          key="toolbar"
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.openDrawer()}
          centerElement="Home"
          searchable={{
              autoFocus: true,
              placeholder: 'Search',
              onChangeText: value => this.setState({ searchText: value }),
              onSearchClosed: () => this.setState({ searchText: '' }),
          }}
      />
  );
}

  render() {
      const { isDrawer } = this.state;
      console.log('**', isDrawer)
    return(
      <View style={{ flex: 1 }}>
          {this.renderToolbar()}
          <ScrollView
              keyboardShouldPersistTaps="always"
              keyboardDismissMode="interactive"
          >
              {this.renderItem('Action buttons', 'actionButtonSpec')}
              {this.renderItem('Avatars', 'avatar')}
              {this.renderItem('Badge', 'badge')}
              {this.renderItem('Buttons', 'button')}
              {this.renderItem('Cards', 'card')}
              {this.renderItem('Checkbox', 'checkbox')}
              {this.renderItem('Dialog', 'dialog')}
              {this.renderItem('Icon toggles', 'iconToggle')}
              {this.renderItem('List items', 'list')}
              {this.renderItem('Radio buttons', 'radioButton')}
              {this.renderItem('Toolbars', 'toolbar')}
              {this.renderItem('Bottom navigation', 'bottomNavigation')}
              {this.renderItem('Drawer', 'drawer')}
              {this.renderItem('Toolbars1', 'toolbar1')}
              {this.renderItem('Toolbars2', 'toolbar2')}
              {this.renderItem('Toolbars3', 'toolbar3')}
              {this.renderItem('Toolbars4', 'toolbar4')}
              {this.renderItem('Toolbars5', 'toolbar5')}
          </ScrollView>
          <ActionButton
              actions={[
                  { icon: 'email', label: 'Email' },
                  { icon: 'phone', label: 'Phone' },
                  { icon: 'sms', label: 'Text' },
                  { icon: 'favorite', label: 'Favorite' },
              ]}
              transition="speedDial"
              onPress={(action) => {
                  if (Platform.OS === 'android') {
                      ToastAndroid.show(action, ToastAndroid.SHORT);
                  }
              }}
              style={{
                  positionContainer: { bottom: 76 },
              }}
          />
      </View>
    );
  }
}
