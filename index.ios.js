/**
 * iOS entry point - you can use this for iOS only setup
 * 
 * @flow
 */

import './App/Config/ReactotronConfig';
import { AppRegistry } from 'react-native';
import App from './App/Containers/App';

AppRegistry.registerComponent('reactNativeBase', () => App);
