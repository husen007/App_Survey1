/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import SurveyBiodata from './src/pages/SurveyBiodata';
// import Gaji from './src/pages/gaji';
// import Register from './src/pages/Register';

AppRegistry.registerComponent(appName, () => SurveyBiodata);
