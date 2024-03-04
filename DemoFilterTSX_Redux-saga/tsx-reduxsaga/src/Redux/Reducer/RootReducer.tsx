import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";


const RootReducers = combineReducers({
    listAccount: AccountReducer,
});
    

export default RootReducers;