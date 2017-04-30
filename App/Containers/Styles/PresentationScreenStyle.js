import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  heroImageContainer: {
    flexDirection: 'row',
    width: Metrics.images.fullWW,
    height: Metrics.images.heroH
  },
  heroImage: {
    resizeMode: 'cover',
    width: Metrics.images.fullWW,
    height: Metrics.images.heroH,
    top: 0,
    left: 0
  },
  heroContentWrapper: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.darkSelect,
    bottom: 0,
    padding: Metrics.baseMargin * 5,
    paddingTop: 25,
    paddingBottom: 25
  },
  heroContent: {
    color: Colors.textColor2,
    textAlign: 'center',
    ...ApplicationStyles.screen.heroContent,
    // borderColor: '#f00',
    // borderWidth: 1
  },
  heroTitle: {
    ...ApplicationStyles.screen.heroTitle,
    color: Colors.textColor2,
    textAlign: 'center'
  }
})
