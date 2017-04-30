import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  button: {
    backgroundColor: Colors.clear,
  },
  buttonPressed: {
    backgroundColor: Colors.lightSelect,
  },
  buttonText: {
    ...Fonts.style.appFurniture,
    color: Colors.textColor2,
    padding: Fonts.lineHeights.alt,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
  },
  buttonTextPressed: {
    ...Fonts.style.appFurniture,
    color: Colors.textColor2,
    padding: Fonts.lineHeights.alt,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
  }
}
