import { Children, useState } from "react"

export function NewToDoForm({ onSubmit, children }) {

  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          value={newItem}
          placeholder="Add Item..."
          onChange={e => {
            e.preventDefault();
            setNewItem(e.target.value)
          }
          }
          type="text"
          id="item" />
          

        <button className="btn"> Add </button>
      </div>
    </form>
  )
}