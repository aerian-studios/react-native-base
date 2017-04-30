// Utility functions
import { Platform } from 'react-native'

// useful cleaning functions
const nullToEmpty = str => (str == undefined) ? '' : str;
const replaceEscapedCRLF = (str, replacement = ' ') => {
  let newStr = str;

  newStr.replace(/\\n/g, replacement);
  return newStr;
}
const nullifyNewlines = str => {
  let newStr = newStr = replaceEscapedCRLF(str, ' ');

  newStr = nullToEmpty(newStr);
  return newStr;
}

// Correct Map URIs
export const locationURL = (address) => {
  let cleanAddress = nullifyNewlines(address)
  // https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
  let url = `http://maps.apple.com/?address=${cleanAddress}`
  // https://developers.google.com/maps/documentation/ios-sdk/urlscheme
  if (Platform.OS === 'android') url = `http://maps.google.com/?q=${cleanAddress}`

  return url
}
export const directionsURL = (address) => {
  let cleanAddress = nullifyNewlines(address)
  // https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
  let url = `http://maps.apple.com/?daddr=${cleanAddress}&dirflg=d`
  // https://developers.google.com/maps/documentation/ios-sdk/urlscheme
  if (Platform.OS === 'android') url = `http://maps.google.com/?daddr=${cleanAddress}`

  return url
}
