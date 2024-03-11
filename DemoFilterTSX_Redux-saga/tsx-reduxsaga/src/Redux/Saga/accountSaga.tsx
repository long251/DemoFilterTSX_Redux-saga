import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from '../Const/AccountType';
import { Account, getListAccountAPI } from '../../API/AccountAPI';
import { actionFetchListAccountRedux } from '../Action/AccountAction';
import { SagaIterator } from 'redux-saga';
function* fetchListAccount(action: any):Generator<any, void, Account[]> {
  try {
    const { p, n, gen, date, minD, maxD } = action.payload;
    const response: Account[] = yield call(getListAccountAPI, p, n, gen, date, minD, maxD);
    yield put(actionFetchListAccountRedux(response));
  } catch (error) {
    console.log("lỗi gì?", error);
  }
}

export function* watchFetchListAccount() {
  yield takeEvery(TYPES.FETCH_LIST_ACCOUNT, fetchListAccount);
}
