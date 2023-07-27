

export function ToDoItem({completed = false, id, title,
     toggleTodo, deleteTodo}){
    return(
      <div className="ToDoItem">
        
        <span>
          <input 
          type="checkbox" 
          checked={completed}
          onChange = {e =>toggleTodo(id)}
          >
          </input>
          {title}
        </span>
        <button 
        onClick={()=> deleteTodo(id)} 
        className="btn-danger">Delete</button>
      
      </div>
    )
}