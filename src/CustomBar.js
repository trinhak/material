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
    // if(this.props.activeTab === 0) {
    //   this.scroll.scrollTo({ x: 0})
    // }
    // console.log('**', (this.props.containerWidth / 8) * (this.props.activeTab + 1))
    this.scroll.scrollTo({ x: (this.props.containerWidth / 8) * (this.props.activeTab + 1)})
  }

  render() {
    return <ScrollView
      style={[styles.tabs, this.props.style]}
      horizontal
      ref={e => { this.scroll = e }}
      >
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={[styles.tab, { width: 100 }]}>
          <Text>{tab}</Text>
        </TouchableOpacity>;
      })}
    </ScrollView>;
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});

