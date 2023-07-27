import { ToDoItem } from "./ToDoItem"

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  console.error("todos: ", todos, [...todos]);
  return (
    <div className="list">
      {todos.length === 0 ? "No To do items" : ""}
      {todos.map(todo => {
        return (
          <ToDoItem {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo} />


        )
      })}
    </div>
  )
}