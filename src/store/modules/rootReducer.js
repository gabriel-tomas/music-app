import { combineReducers } from 'redux';
import currentMusic from './currentMusic/reducer';
import musicPlayer from './musicPlayer/reducer';
import playerVolume from './playerVolume/reducer';
import userPlatform from './userPlatform/reducer';
import loading from './loading/reducer';

export default combineReducers({
  currentMusic,
  musicPlayer,
  playerVolume,
  userPlatform,
  loading,
});
