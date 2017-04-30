import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
    articleHeroImage: {
        width: Metrics.screenWidth,
        height: (Metrics.screenWidth / 2) * 1.2,
        overflow: 'hidden',
        alignSelf: 'center'
    },
    articleHeroImageContainer: {
        flexDirection: 'row',
        width: Metrics.screenWidth,
        height: Metrics.images.heroH
    },
    articleTitleWrapper: {
        paddingLeft: Metrics.baseMargin,
        paddingRight: Metrics.baseMargin,
        paddingTop: Metrics.baseMargin * 3
    },
    articleTitle: {
        ...Fonts.style.heroTitle
    },
    articleSubTitleWrapper: {
        paddingTop: Metrics.baseMargin
    },
    caption: {
        ...Fonts.style.caption,
        paddingLeft: Metrics.baseMargin,
        paddingRight: Metrics.baseMargin,
    },
    articleWrapper: {
        paddingLeft: Metrics.baseMargin,
        paddingRight: Metrics.baseMargin
    },
    articleImage: {
        width: Metrics.screenWidth - Metrics.baseMargin*2,
        height: (Metrics.screenWidth / 2) * 1.2,
        overflow: 'hidden',
        alignSelf: 'center',

    },
    articleImageContainer: {
        flexDirection: 'row',
        width: Metrics.screenWidth,
        height: (Metrics.screenWidth / 2) * 1.2 + Metrics.baseMargin*4,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
