import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native'

import SortableGrid from 'react-native-sortable-grid'

export default class basicExample extends Component {

  constructor() {
    super()
    this.alphabets = ['A','B','C','D','E','F',
                      'G','H','I','J','K','L',
                      'M','N','O','P','Q','R',
                      'S','T','U','V','W','X',
                      'A','B','C','D','E','F',
                      'G','H','I','J','K','L',
                      'M','N','O','P','Q','R',
                      'S','T','U','V','W','X']
    this.state = {
      scrollable: true
    }
  }

  getColor() {
    let r = this.randomRGB()
    let g = this.randomRGB()
    let b = this.randomRGB()
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
  randomRGB = () => 160 + Math.random()*85

  render() {
    return (
      <ScrollView
        ref={e => this.scroll = e}
        scrollEnabled={this.state.scrollable}
      >
        <SortableGrid
          blockTransitionDuration={400}
          activeBlockCenteringDuration={200}
          itemsPerRow={4}
          dragActivationTreshold={200}
          onDragRelease={(itemOrder) => this.setState({scrollable:true}) }
          onDragStart= {(index) => this.setState({scrollable: false})}
          inactive={true}
        >
          {
            this.alphabets.map( (letter, index) =>
              <View key={index} style={[styles.block, { backgroundColor: this.getColor() }]}>
                <Text style={{color: 'white', fontSize: 50}}>{letter}</Text>
              </View>
            )
          }
        </SortableGrid>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
