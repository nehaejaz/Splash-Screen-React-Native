/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Splash from './components/Splash';
import {name as appName} from './app.json';
import Login from './components/Login';

AppRegistry.registerComponent(appName, () => Login);
