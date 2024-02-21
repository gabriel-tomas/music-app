import { get } from 'lodash';

const initialState = {
  userPlatform: get(
    navigator.userAgent.match(/Android|iPhone|iPad/i),
    '[0]',
    'PC',
  ),
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
