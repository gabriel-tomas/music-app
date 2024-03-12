import * as types from '../types';

const initialState = {
  global: {
    Categories: [],
  },
  pages: {
    Home: {
      albums: [],
      playlists: {},
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_DATA: {
      const newState = { ...state };
      if (action.payload.type === 'categories') {
        newState.global.Categories = action.payload.content;
      } else if (action.payload.type === 'home') {
        newState.pages.Home.albums = action.payload.content.albums;
        newState.pages.Home.playlists = action.payload.content.playlists;
      }
      return newState;
    }

    default: {
      return state;
    }
  }
};
