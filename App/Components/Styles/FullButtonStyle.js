import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: Colors.background1
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.textColor2,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold
  }
})
