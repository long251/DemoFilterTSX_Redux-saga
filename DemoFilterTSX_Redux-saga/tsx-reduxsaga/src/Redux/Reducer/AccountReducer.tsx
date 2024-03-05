import * as TYPES from "../Const/AccountType"; // Import acctionType đê sử dụng
var initialState: any = {
  
};

const AccountReducer = (state = initialState, action: any) => {
  // console.log("data reducer", state);
  switch (action.type) {
    case TYPES.FETCH_LIST_ACCOUNT:
      //   state = action.payload;
      //   return [...state];
      return { ...action.payload };
    default:
      //   return [...state];
      return { ...state };

      
  }
};
export default AccountReducer;
