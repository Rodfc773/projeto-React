import { all } from 'redux-saga/effects';

import exampleSaga from './examples/sagas';

export default function* rootSaga() {
  return yield all([exampleSaga]);
}
