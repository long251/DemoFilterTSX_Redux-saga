import { all } from 'redux-saga/effects';
import { watchFetchListAccount } from './accountSaga';


export default function* rootSaga() {
  yield all([
    watchFetchListAccount(),
  ]);
}