/**
 * Android entry point - can be used for Android only setup
 * 
 * @flow
 */

import './App/Config/ReactotronConfig';
import {AppRegistry} from 'react-native';
import App from './App/Containers/App';

AppRegistry.registerComponent('reactNativeBase', () => App);
