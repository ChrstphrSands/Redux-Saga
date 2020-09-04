import { applyMiddleware, compose, createStore } from "redux";
import reduxSaga  from "redux-saga";

import reducers from './reducers'

import rootSaga from "./sagas";

const sagaMiddleware = reduxSaga();

const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

export default store;
