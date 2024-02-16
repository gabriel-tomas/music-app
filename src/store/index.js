import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore } from 'redux';

import persistedReducers from './modules/reduxPersist';

import rootReducer from './modules/rootReducer';

const store = createStore(persistedReducers(rootReducer));

export const persistor = persistStore(store);
export default store;
