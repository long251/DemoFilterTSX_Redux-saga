import { Dispatch } from 'redux';
import { Account, getListAccountAPI } from '../../API/AccountAPI';
import * as TYPES from '../Const/AccountType';

export const actionFetchListAccountAPI:any = (
  p: number,
  n: string,
  gen: string,
  date: string,
  minD: string,
  maxD: string,
) => ({
  // return (dispatch: Dispatch) => {
  //   return getListAccountAPI(p, n, gen, date, minD, maxD).then((response) => {
  //     // console.log("data Action", response);
  //     dispatch(actionFetchListAccountRedux(response));
  //   });
  // };
  type: TYPES.FETCH_LIST_ACCOUNT,
  payload: { p, n, gen, date, minD, maxD },
});
export const actionFetchListAccountRedux: any = (listAccount: Account[]) => {
  return {
    type: TYPES.FETCH_LIST_ACCOUNT,
    payload: listAccount,
  };
};
export const actionFetchListError: any = (error: string) => {
  return {
    type: TYPES.FETCH_LIST_ACCOUNT_ERR,
    payload: error,
  };
};
