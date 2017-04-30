import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'


const cardWidth = (Metrics.screenWidth / 2) - (Metrics.doubleBaseMargin) + (Metrics.baseMargin / 2);
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginLeft: Metrics.baseMargin / 2,
      marginRight: Metrics.baseMargin / 2,
  },
  item: {
      width: (Metrics.screenWidth / 2) - (Metrics.baseMargin / 2),
  },
  gridImage: {
    ...ApplicationStyles.screen.cardImage,
    width: cardWidth,
    height: cardWidth * 0.55,
    // borderTopLeftRadius: Metrics.cardRadius,
    // borderTopRightRadius: Metrics.cardRadius,
    // overflow: 'hidden',
    // alignSelf: 'center'
  },
  gridAltImage: {
    ...ApplicationStyles.screen.cardImage,
    width: cardWidth,
    height: cardWidth * 0.779,
    // overflow: 'hidden',
    // alignSelf: 'center'
  },
  gridCard: {
    ...ApplicationStyles.screen.card,
    width: cardWidth
  },
})
