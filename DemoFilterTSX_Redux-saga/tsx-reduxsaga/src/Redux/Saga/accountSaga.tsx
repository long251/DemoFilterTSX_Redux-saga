import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from '../Const/AccountType';
import { Account, getListAccountAPI } from '../../API/AccountAPI';
import { actionFetchListAccountRedux } from '../Action/AccountAction';
import { SagaIterator } from 'redux-saga';
function* fetchListAccount(action: any):Generator<any, void, Account[]> {
  // try {
  //   const { p , n, gen, date, minD, maxD } = action.payload;
  //   const response: Account[] = yield call(getListAccountAPI, p, n, gen, date, minD, maxD);
  //   yield put(actionFetchListAccountRedux(response));
  // } catch (error) {
  //   console.log("lỗi gì?", error);
  // }
  try {
    const { p, n, gen, date, minD, maxD } = action.payload || {};
    if (p !== undefined && n !== undefined && gen !== undefined && date !== undefined && minD !== undefined && maxD !== undefined) {
      const response: Account[] = yield call(getListAccountAPI, p, n, gen, date, minD, maxD);
      yield put(actionFetchListAccountRedux(response));
    } else {
      console.error('Payload không hợp lệ:', action.payload);
    }
  } catch (error) {
    console.error("Lỗi:", error);
  }
}
export function* watchFetchListAccount() {
  yield takeEvery(TYPES.FETCH_LIST_ACCOUNT, fetchListAccount);
}
