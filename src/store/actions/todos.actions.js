import {
  ADD_TODO,
  DELETE_TODO, GET_TODO_REQUEST, GET_TODO_SUCCESS,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "./actionTypes";

export const addTodo = data => ({
  type: ADD_TODO,
  payload: data
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});



export const getTodos = () => ({
  type: GET_TODOS_REQUEST
});

export const getTodosSuccess = (data) => ({
  type: GET_TODOS_SUCCESS,
  payload: data
});


export const getTodoRequest = (id) => ({
  type: GET_TODO_REQUEST,
  payload: id
});

export const getTodoSuccess = (data) => ({
  type: GET_TODO_SUCCESS,
  payload: data
});
