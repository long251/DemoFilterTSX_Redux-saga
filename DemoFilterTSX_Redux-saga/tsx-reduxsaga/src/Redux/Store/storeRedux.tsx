import { createStore, compose, applyMiddleware } from "redux";
import RootReducers from "../Reducer/RootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../Saga/sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeRedux = createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default storeRedux;