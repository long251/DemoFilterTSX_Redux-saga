// import { put, takeLatest, call } from "redux-saga/effects";
// import * as TYPES from "../Const/AccountType";
// import { getListAccountAPI } from "../../API/AccountAPI";
// import { actionFetchListAccountRedux } from "../Action/AccountAction";

// function* fetchListAccount(action: any): Generator<void, void, any> {
//   const { p, n, gen, date, minD, maxD } = action.payload; // Truy cập các tham số từ action.payload
//   try {
//     const response = yield call(getListAccountAPI, p, n, gen, date, minD, maxD);
//     yield put(actionFetchListAccountRedux(response));
//   } catch (error) {
//     // Xử lý lỗi nếu cần
//   }
// }

// export function* watchFetchListAccount(): Generator<void, void, any> {
//   yield takeLatest(TYPES.FETCH_LIST_ACCOUNT, fetchListAccount);
// }
export {};