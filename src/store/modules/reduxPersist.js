import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'Music-App',
      storage,
      whitelist: ['currentMusic', 'queueMusics', 'playerVolume', 'auth'],
    },
    reducers,
  );

  return persistedReducers;
};
