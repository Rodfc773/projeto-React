import { legacy_createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistedReducer from './modules/examples/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  persistedReducer(rootReducer),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persitor = persistStore(store);
export default store;
