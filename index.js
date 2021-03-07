import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';
import TrackplayerServices from './service';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => TrackplayerServices);
