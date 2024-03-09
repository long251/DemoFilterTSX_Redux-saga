import { createStore, applyMiddleware, compose } from "redux";
import RootReducers from "../Reducer/RootReducer";
import  {thunk} from "redux-thunk";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeRedux = createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(thunk)),
  
);

export default storeRedux;

// import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
// import RootReducers from "../Reducer/RootReducer";
// import rootSaga from "Redux/Saga/rootSaga";


// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagaMiddleware = createSagaMiddleware();

// const storeRedux = createStore(
//   RootReducers,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );

// sagaMiddleware.run(rootSaga);

// export default storeRedux;

