import { Metrics, Colors } from '../../Themes/'
export default {
  container: {
    flex: 1
  },
  logo: {
    alignSelf: 'flex-start',
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    margin: Metrics.doubleBaseMargin
  },
  menuSection: {
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    paddingBottom: Metrics.baseMargin + Metrics.baseMargin / 2,
  }
}
