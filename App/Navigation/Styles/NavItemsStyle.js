// @flow
import {Platform} from 'react-native';
import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  // burger menu
  navButtonLeft: {
    margin: 0,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.small
  },
  navButtonLeftWrapper: {
    marginTop: (Platform.OS === 'ios') ? -17 : -5,// no idea why this needs to be 3px less than the other items
  }
})
