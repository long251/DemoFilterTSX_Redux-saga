import { Dispatch } from "redux";
import { getListAccountAPI } from "../../API/AccountAPI";
import * as TYPES from "../Const/AccountType";

export const actionFetchListAccountAPI: any = (p: number, n: string, gen: string, date: string, minD: string, maxD: string)=> {
  return (dispatch: Dispatch) => {
    return getListAccountAPI(p, n, gen, date, minD, maxD).then((response) => {
      // console.log("data Action", response);
      dispatch(actionFetchListAccountRedux(response));
    });
  };
};

export const actionFetchListAccountRedux: any = (listAccount: any) => {
  return {
    type: TYPES.FETCH_LIST_ACCOUNT,
    payload: listAccount,
  };
};
