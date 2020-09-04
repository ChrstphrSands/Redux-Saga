import {
  GET_TODO_SUCCESS,
  GET_TODOS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  todo: {}
};

const todos = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload
      };
    case GET_TODO_SUCCESS:
      console.log(action)
      return {
        ...state,
        todo: action.payload
      };
    default:
        return state;
  }
};

export default todos;
