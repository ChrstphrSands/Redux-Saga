import { createSelector } from "reselect";

const getTodosStore = store => store.todos.todos;
const getTodoStore = store => store.todos.todo;

export const getTodosSelector = createSelector(
  [getTodosStore],
  (todos) => todos
)

export const getTodoSelector = createSelector(
  [getTodoStore],
  (todo) => todo
)
