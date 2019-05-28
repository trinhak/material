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

  navigate = (route) => () => {
    if (this.props.navigation.state.routes[0].routes[this.props.navigation.state.routes[0].routes.length -1].routeName === route) {
      this.props.navigation.closeDrawer()
    } else {
      this.props.navigation.navigate(route)
    }
  }

  render() {
    console.log(this.props.navigation.state.routes[0])
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
                        onPress: this.navigate('Home'),
                        active: this.props.navigation.state.routes[0].index === 0
                      },
                  ]}
              />
              <Drawer.Section
                  title="Personal"
                  items={[
                      { icon: 'settings',
                      value: 'Settings',
                      onPress: this.navigate('Details'),
                      active: this.props.navigation.state.routes[0].routes[this.props.navigation.state.routes[0].routes.length -1].routeName === 'Details'
                    },
                    {
                      icon: 'today',
                      value: 'TabBar',
                      onPress: this.navigate('TabBar'),
                      active: this.props.navigation.state.routes[0].routes[this.props.navigation.state.routes[0].routes.length -1].routeName === 'TabBar'
                    },
                  ]}
              />
          </Drawer>
      </View>
  </Container>
    );
  }
}
