import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: Metrics.baseMargin,
      paddingTop: Metrics.baseMargin * 1.8,
      paddingBottom: 12
  },
  categoryTitle: {
    ...Fonts.style.h3,
    color: Colors.textColor,
    fontWeight: 'bold'
  },
  horizontalScroller: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  }
})
