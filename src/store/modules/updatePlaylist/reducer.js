import * as types from '../types';

const initialState = {
  updatePlaylists: false,
  updateOnlyAPlaylist: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PLAYLIST: {
      const newState = { ...state };
      newState.updatePlaylists = true;
      return newState;
    }

    case types.NOT_UPDATE_PLAYLIST: {
      const newState = { ...state };
      newState.updatePlaylists = false;
      return newState;
    }

    case types.UPDATE_ONLY_A_PLAYLIST: {
      const newState = { ...state };
      newState.updateOnlyAPlaylist = true;
      return newState;
    }

    case types.NOT_UPDATE_ONLY_A_PLAYLIST: {
      const newState = { ...state };
      newState.updateOnlyAPlaylist = false;
      return newState;
    }

    default: {
      return state;
    }
  }
};
