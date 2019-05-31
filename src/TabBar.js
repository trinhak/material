import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import ScrollableTabView , { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

import CustomBar from './CustomBar'

export default class TabBar extends Component {

  componentDidMount() {
    // let a = 0
    // const time = setInterval(() => {
    //   const { scrollWith } = this.state;
    //   a = a + 10
    //   if(this.scroll) {
    //     this.scroll.scrollTo({ x: a, animated: true })
    //   }
    // }, 500)
  }

  first = () => (
    <View tabLabel="First" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>First</Text>
    </View>
  )

  
  second = () => (
    <View tabLabel="Second" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Second</Text>
    </View>
  )

  third = () => (
    <View tabLabel="Third" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Third</Text>
    </View>
  )

  fourth = () => (
    <View tabLabel="Fourth" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fourth</Text>
    </View>
  )
  fifth = () => (
    <View tabLabel="Fifth" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fifth</Text>
    </View>
  )
  sixth = () => (
    <View tabLabel="Sixth" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sixth</Text>
    </View>
  )
  seventh = () => (
    <View tabLabel="Seventh" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Seventh</Text>
    </View>
  )
  eighth = () => {
    return(
    <View tabLabel="Eighth" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Eighth</Text>
    </View>
  )}

  onChangeTab = (obj) => {
    // if (this.scroll) {
    //   this.scroll.scrollTabs()
    // }
  }

  renderTab = (name, page, isTabActive, goToPage) => {
    console.log(e)
    const test = (
      <View>
        <Text>oke</Text>
      </View>
    )
   return (
     {test}
   )
}


  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={0}
        renderTabBar={() => <CustomBar />}
        tabBarUnderlineStyle={{ backgroundColor: 'red' }}
        scrollWithoutAnimation
      >
        {this.first()}
        {this.second()}
        {this.third()}
        {this.fourth()}
        {this.fifth()}
        {this.sixth()}
        {this.seventh()}
        {this.eighth()}
      </ScrollableTabView>
    )
  }
}

