import {Platform} from 'react-native';
import {Colors, Metrics} from '../../Themes/';

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.background1,
    padding: 0,
    height: Metrics.navBarHeight
  },

  // following have -20 to account for ios border applied to root
  title: {
    marginTop: (Platform.OS === 'ios') ? -20 : -5,
    color: Colors.textColor2
  },
  leftButton: {
    marginTop: (Platform.OS === 'ios') ? -20 : -5,
    tintColor: Colors.textColor2
  },
  rightButton: {
    marginTop: (Platform.OS === 'ios') ? -20 : -5,
    color: Colors.textColor2
  }
}
