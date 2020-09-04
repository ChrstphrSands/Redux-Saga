import { all } from "redux-saga/effects";
import watchTodos from "./todos.sagas";

export default function* rootSaga() {
  yield all([
    watchTodos()
  ])
};
