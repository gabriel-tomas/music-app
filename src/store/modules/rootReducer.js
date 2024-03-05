import { combineReducers } from 'redux';
import currentMusic from './currentMusic/reducer';
import musicPlayer from './musicPlayer/reducer';
import playerVolume from './playerVolume/reducer';
import userPlatform from './userPlatform/reducer';
import dataSaver from './dataSaver/reducer';
import updatePlaylists from './updatePlaylist/reducer';

// music app backend
import auth from './auth/reducer';

export default combineReducers({
  currentMusic,
  musicPlayer,
  playerVolume,
  userPlatform,
  dataSaver,
  auth,
  updatePlaylists,
});
