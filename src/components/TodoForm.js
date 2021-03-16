import React, { useState } from "react";
import TodoList from "./TodoList";
function TodoForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const HandleChange = (e) => {
    setInput(e.target.value);
  };

  const addtodo = () => {
    setTodos([...todos, { item: input, key: Date.now() }]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} placeholder="add a todo" onChange={HandleChange} />
        <button type="submit" onClick={addtodo}>
          Add
        </button>
        <TodoList todos={todos} setTodos={setTodos} />
      </form>
    </div>
  );
}

export default TodoForm;
