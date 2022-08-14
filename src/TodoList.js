function TodoList({ todos }) {
  return (todos.map((item) => <div key={item.key}>{item.title}</div>))
}

export default TodoList
