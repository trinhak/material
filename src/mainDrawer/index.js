import React, { Component } from 'react';
import { Drawer, Avatar, Button } from 'react-native-material-ui';

import { View, TouchableOpacity, Text } from 'react-native';
import Container from '../Container';

// import { Container } from './styles';

export default class mainDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDrawerHome: false,
      isDrawerSetting: false
    };
}

  render() {

    return (
      <Container>
      <View style={{ flex: 1 }}>
          <Drawer>
              <Drawer.Header >
                  <Drawer.Header.Account
                      avatar={<Avatar text="A" />}
                      accounts={[
                          {
                            avatar:
                               <Button text="" icon="clear" onPress={() => this.props.navigation.closeDrawer()} />,
                            key: 'b',
                          },
                      ]}
                      footer={{
                          dense: true,
                          centerElement: {
                              primaryText: 'Reservio',
                              secondaryText: 'business@email.com',
                          },
                          rightElement: 'arrow-drop-down',
                      }}
                  >
                    <TouchableOpacity style={{ width: 100, height: 100}}>
                      <Text>close</Text>
                    </TouchableOpacity>
                  </Drawer.Header.Account>
              </Drawer.Header>
              <Drawer.Section
                  divider
                  items={[
                      {
                        icon: 'home',
                        value: 'Home',
                        onPress: () => this.props.navigation.navigate('Home'),
                        active: this.props.navigation.state.routes[0].index === 0
                      },
                  ]}
              />
              <Drawer.Section
                  title="Personal"
                  items={[
                      { icon: 'settings',
                      value: 'Settings',
                      onPress: () => this.props.navigation.navigate('Details'),
                      active: this.props.navigation.state.routes[0].index === 1
                    },
                  ]}
              />
          </Drawer>
      </View>
  </Container>
    );
  }
}
