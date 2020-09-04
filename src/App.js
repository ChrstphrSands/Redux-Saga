import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodoRequest, getTodos } from "./store/actions/todos.actions";
import {
  getTodoSelector,
  getTodosSelector
} from './store/selectors/todos.selectors';


function App() {
  const dispatch = useDispatch();
  const todos = useSelector(getTodosSelector);
  const todo = useSelector(getTodoSelector)

  useEffect(() => {
    dispatch(getTodos())
    dispatch(getTodoRequest(25));
  }, [dispatch]);

  return (
    <div>
      <div className="flex bg-blue-100">
        <h1 className='text-green-900 border-2'>Todo List</h1>
      </div>
      <div>
        {
          todos.length !== 0 && (
            todos.map(t => (
                <li key={t.title} >
                  { t.title }
                </li>
              )
            ))}
        <div>
          <h2>{JSON.stringify(todo)}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
