import { combineReducers } from 'redux';
import currentMusic from './currentMusic/reducer';
import musicPlayer from './musicPlayer/reducer';
import playerVolume from './playerVolume/reducer';
import userPlatform from './userPlatform/reducer';
import dataSaver from './dataSaver/reducer';

// music app backend
import checkLogin from './checkLogin/reducer';
import register from './register/reducer';
import login from './login/reducer';

export default combineReducers({
  currentMusic,
  musicPlayer,
  playerVolume,
  userPlatform,
  dataSaver,
  checkLogin,
  register,
  login,
});
