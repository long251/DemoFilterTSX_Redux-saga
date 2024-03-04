import { Dispatch } from "redux";
import { getListAccountAPI } from "../../API/AccountAPI";
import * as TYPES from "../Const/AccountType"; 



export const actionFetchListAccountAPI:any = (p:number, n:string) => {
  return (dispatch: Dispatch) => {
    return getListAccountAPI(p, n).then((response) => {
      dispatch(actionFetchListAccountRedux(response));
      
    });
  };
};

export const actionFetchListAccountRedux:any = (listAccount:any) => {
 
    
  return {
    type: TYPES.FETCH_LIST_ACCOUNT,
    payload: listAccount,
  };
};


