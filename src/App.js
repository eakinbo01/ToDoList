
import './App.css';
import { useState } from "react"
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';

function App() {
  // const [newItem, setNewItem]= useState("")
  // const [todos, setTodos]=useState(()=> {
  //   const localValue = localStorage.getItem("ITEMS")
  //   if (localValue == null) return[]
  //   return JSON.parse(localValue)
  // })

  const [todos, setTodos] = useState([])

  console.log("APP todos", todos);

  // useEffect(()=> {
  // localStorage.setItem("Items", JSON.stringify(todos))
  // }, [todos])

  function addToDo(title) {
    setTodos(currentTodos => {
      return [
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false
        },
        ...currentTodos,
      ]
    })
  }

  function toggleTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        }
        return todo
      })
    })
  }
  let deleteTodo = (id) => {
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)


    );
  }
  return (
    <div className="container">
      <h1 className="header">To-do List</h1>
      <NewToDoForm onSubmit={addToDo} />
      <ToDoList todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
