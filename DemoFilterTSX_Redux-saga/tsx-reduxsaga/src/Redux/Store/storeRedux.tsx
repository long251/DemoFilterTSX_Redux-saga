import { createStore, applyMiddleware, compose } from "redux";
import RootReducers from "../Reducer/RootReducer";
import  {thunk} from "redux-thunk";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeRedux = createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default storeRedux;

