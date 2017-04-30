import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes/';

export default StyleSheet.create({
  applicationView: {
    flex: 1,
    borderTopWidth: (Platform.OS === 'ios') ? 20 : 0,
    borderColor: Colors.brandShadow
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
