import { combineReducers } from 'redux';
import currentMusic from './currentMusic/reducer';
import musicPlayer from './musicPlayer/reducer';
import playerVolume from './playerVolume/reducer';

export default combineReducers({
  currentMusic,
  musicPlayer,
  playerVolume,
});
