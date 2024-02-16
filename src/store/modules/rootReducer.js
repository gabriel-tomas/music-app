import { combineReducers } from 'redux';
import currentMusic from './currentMusic/reducer';
import musicPlayer from './musicPlayer/reducer';

export default combineReducers({
  currentMusic,
  musicPlayer,
});
