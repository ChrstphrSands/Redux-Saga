import { call, put, takeLatest } from "redux-saga/effects";
import { GET_TODO_REQUEST, GET_TODOS_REQUEST } from "../actions/actionTypes";
import { getTodosSuccess, getTodoSuccess } from "../actions/todos.actions";
import { Service } from "../api";

function* getTodos () {
  try {
    const data = yield call(Service.Todos.getTodos);
    yield put(getTodosSuccess(data));
  } catch (err) {
    console.log(err)
  }
}

function* getTodo (action) {
  try {
    const id = action.payload;
    const data = yield call(Service.Todos.getTodo, id);
    yield put(getTodoSuccess(data));
  } catch(err) {
    console.log(err)
  }
}

export default function* watchTodos() {
  yield takeLatest(GET_TODOS_REQUEST, getTodos);
  yield takeLatest(GET_TODO_REQUEST, getTodo);
}
