import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FacebookTabBar extends React.Component {
  icons = [];

  constructor(props) {
    super(props);
    this.icons = [];
    this.scroll= null
  }

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue.bind(this));
  }

  componentDidUpdate(prevProps) {
    if(prevProps.activeTab !== this.props.activeTab) {
      this.scrollTabs()
    }
  }

  setAnimationValue({ value, }) {
    this.icons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  }

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  scrollTabs = () => {
    // if(this.props.activeTab === 7) {
    //   this.scroll.scrollTo({ x: 800})
    // } else if (this.props.activeTab === 0) {
    //   this.scroll.scrollTo({ x: 0})
    // }
    // else {
      this.scroll.scrollTo({ x: 100 * (this.props.activeTab)})
    // }
  }

  render() {
    return <ScrollView
      style={[styles.tabs, this.props.style]}
      horizontal
      ref={e => { this.scroll = e }}
      showsHorizontalScrollIndicator={false}
      >
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={[styles.tab, { width: 100 }]}>
          <Text style={this.props.activeTab === i && { color: 'red' }}>{tab}</Text>
          <View style={[{
            justifyContent: 'center',
            alignItems: 'center',
            height: 18,
            width: 18,
            borderRadius: 9,
            backgroundColor: this.props.activeTab === i ? 'red' : 'gray',
            marginBottom: 10
            }]}>
            <Text style={[this.props.activeTab === i && { color: 'white' }]}
          >
            3
          </Text>
          </View>
        </TouchableOpacity>;
      })}
    </ScrollView>;
  }
}

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginTop: 30,
    flexDirection: 'row'
  },
  tabs: {
    // height: 10,
    // flexDirection: 'row',
    // borderWidth: 1,
    // borderTopWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // borderBottomColor: 'rgba(0,0,0,0.05)',
    flexGrow: 0,
    flexShrink: 0,
    height: 100
  },
});

