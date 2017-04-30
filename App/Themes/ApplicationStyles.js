import Fonts from './Fonts';
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      marginTop: Metrics.navBarHeight,
      backgroundColor: Colors.background
    },
    cardContainer: {
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 5
      },
      flex: 1,
      paddingTop: Metrics.baseMargin
    },
    container: {
      flex: 1

    },
    backgroundImage: {

    },
    fullScreen: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight
    },
    section: {
      padding: Metrics.baseMargin,
      borderBottomColor: Colors.divider,
      borderBottomWidth: 1,
      marginBottom: Metrics.baseMargin
    },
    card: {
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 1,
      shadowOffset: {
        width: 0,
        height: 2
      },
      flex: 0,
      width: (Metrics.screenWidth / 2) - (Metrics.doubleBaseMargin),
      height: 187,
      margin: Metrics.baseMargin / 2,
      marginTop: Metrics.baseMargin,
      marginBottom: Metrics.baseMargin - 3,
      padding: 0,
      borderRadius: Metrics.cardRadius,
      backgroundColor: Colors.background2
    },
    cardImageWrapper: {
      borderTopLeftRadius: Metrics.cardRadius,
      borderTopRightRadius: Metrics.cardRadius,
      backgroundColor: Colors.background
    },
    cardImage: {
      width: (Metrics.screenWidth / 2) - (Metrics.doubleBaseMargin),
      height: ((Metrics.screenWidth / 2) - (Metrics.doubleBaseMargin)) * 0.55,
      borderTopLeftRadius: Metrics.cardRadius,
      borderTopRightRadius: Metrics.cardRadius,
      overflow: 'hidden',
      alignSelf: 'center'
    },
    cardTitleWrapper: {
      backgroundColor: Colors.background2,
      paddingLeft: Metrics.baseMargin,
      paddingRight: Metrics.baseMargin,
      paddingTop: Metrics.baseMargin,
      paddingBottom: 0
    },
    cardContentWrapper: {
      borderRadius: Metrics.cardRadius,
      backgroundColor: Colors.background2,
      paddingLeft: Metrics.baseMargin,
      paddingRight: Metrics.baseMargin,
      paddingBottom: 0,
      marginTop: -1.5,
      // height: 40 // this is very fragile as it is affected by the relative heights of the content
    },
    horizontalScroller: {
      paddingBottom: Metrics.doubleBaseMargin
    },
    mainHeadingWrapper: {
      padding: Metrics.baseMargin
    },
    mainHeading: {
      ...Fonts.style.h2,
      flex: 1,
      color: Colors.textColor
    },
    altHeading: {
      ...Fonts.style.h2,
      flex: 1,
      alignSelf: 'flex-end',
      backgroundColor: Colors.darkSelect,
      padding: Metrics.baseMargin
    },
    sub: {
      ...Fonts.style.textSub,
      lineHeight: Fonts.lineHeights.sub,
      color: Colors.textColorAlt
    },
    h1: {
      ...Fonts.style.h1,
      lineHeight: Fonts.lineHeights.h1
    },
    h2: {
      ...Fonts.style.h2,
      lineHeight: Fonts.lineHeights.h2
    },
    h3: {
      ...Fonts.style.h3,
      color: Colors.textColor
      // lineHeight: 18
    },
    heroTitle: {
      ...Fonts.style.heroTitle
    },
    heroContent: {
      ...Fonts.style.heroContent
    },
    sectionText: {
      color: Colors.textColor,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    paragraphText: {
      backgroundColor: Colors.backgroundColor,
      color: Colors.textColor,
      padding: Metrics.baseMargin,
      ...Fonts.style.normal
    },
    subtitle: {
      color: Colors.textColor,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    }
  },
  pickerWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: Metrics.baseMargin,
    padding: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.darkSelect,
    justifyContent: 'space-between'
  },
  dropDownWrapper: {
    position: 'absolute',
    width: Metrics.screenWidth,
    top: Fonts.size.input + (2 * Metrics.baseMargin) + 1,
    opacity: 0,
    left: 0,
    backgroundColor: Colors.backgroundColor
  },
  picker: {
    borderWidth: 1,
    borderColor: Colors.darkSelect,
    backgroundColor: Colors.background2
  },
  pickerWrapperButton: {
    ...this.input,
    flex: 2
  },
  inputText: {
    fontSize: Fonts.size.input,
    lineHeight: Fonts.lineHeights.regular
  },
  input: {
    flexDirection: 'row',
    flex: 1,
    height: Fonts.size.input + (2 * Metrics.baseMargin),
    borderColor: Colors.darkSelect,
    borderWidth: 1,
    padding: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    backgroundColor: Colors.background2
  },
  textInput: {
    fontSize: Fonts.size.input,
    lineHeight: Fonts.lineHeights.regular,
    flexDirection: 'row',
    flex: 1,
    height: Fonts.size.input + (2 * Metrics.baseMargin),
    borderColor: Colors.clear,
    margin: 0
  },
  textInputWrapper: {
    flexDirection: 'row',
    flex: 1,
    height: Fonts.size.input + (2 * Metrics.baseMargin),
    borderColor: Colors.darkSelect,
    borderWidth: 1,
    marginBottom: Metrics.baseMargin,
    backgroundColor: Colors.background2
  },
  formRow: {
    flexDirection: 'row',
    marginBottom: Metrics.baseMargin
  },
  formLabel: {
    flex: 1,
    fontSize: Fonts.size.input,
    lineHeight: Fonts.lineHeights.regular,
    marginBottom: Metrics.baseMargin
  },
  formLabelRight: {
    flex: 1,
    fontSize: Fonts.size.input,
    lineHeight: Fonts.lineHeights.regular,
    marginLeft: Metrics.baseMargin
  },
  formFieldSet: {
    flexDirection: 'column',
    margin: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderColor: Colors.darkSelect
  },
  darkLabelContainer: {
    backgroundColor: Colors.error,
    padding: Metrics.smallMargin
  },
  darkLabel: {
    fontFamily: Fonts.bold,
    color: Colors.textColor2
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.textColor,
    backgroundColor: Colors.background,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.error,
    alignItems: 'center',
    textAlign: 'center'
  },
  moreButton: {
    backgroundColor: Colors.transparent,
    height: 20,
    borderRadius: 0,
    marginHorizontal: 0,
    marginVertical: 2,
    justifyContent: 'flex-end'
  },
  moreButtonText: {
    color: Colors.brandColor1,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    fontWeight: '500'
  },
}

export default ApplicationStyles
