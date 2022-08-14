import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState(() => []);
  const inputEl = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('use effect', storedTodos);
    if (storedTodos) { setTodos(storedTodos) }
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


  function handleTodoItem() {
    const title = inputEl.current.value;
    if (title === '') return
    setTodos((prevTodos) => [...prevTodos, { key: uuidv4(), title: title, finished: false }])
    inputEl.current.value = null;

  }
  return (
    <>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <input ref={inputEl} type="text" />
      <button onClick={handleTodoItem}>Add item</button>
    </>
  );
}

export default App;
