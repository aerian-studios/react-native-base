import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import XButton from './XButton';

// Styles
import styles from './Styles/HorizontalScrollViewStyle';
import ApplicationStyles from '../Themes/ApplicationStyles';

class HorizontalScrollView extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.categoryTitle}>{this.props.title}</Text>
            {(this.props.onPress) ? 
              (<XButton text={this.props.moreTitle.toUpperCase() || 'SEE ALL'} onPressDelegate={this.props.onPress} buttonStyle={ApplicationStyles.moreButton} textStyle={ApplicationStyles.moreButtonText} /> )
              : null
            }
        </View>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroller}
        >
            {this.props.children}
        </ScrollView>
      </View>
    )
  }
}

HorizontalScrollView.propTypes = {
  children: React.PropTypes.array,
  title: React.PropTypes.string,
  moreTitle: React.PropTypes.string,
  onPress: React.PropTypes.func
}

export default HorizontalScrollView;
