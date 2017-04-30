import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  line: {
    flex: 1,
    height: 1
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
  textContainer: {
    height: 20,
    marginLeft: 15,
    marginRight: 15
  }
})
