import React from "react";

export default function TodoList({ todos, setTodos }) {
  const handleDelte = (key) => {
    const updateList = todos.filter((i) => {
      return i.key !== key;
    });
    setTodos(updateList);
  };

  return (
    <div>
      {todos.map((i) => {
        return (
          <div key={i.key}>
            {i.item}
            <button
              onClick={() => {
                handleDelte(i.key);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
