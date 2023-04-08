import React from "react";
import { useTodoStore } from "./store/todo.store";

function Actions() {
  const { loadTodos, resetStore } = useTodoStore((state) => state);
  return (
    <div className="flex gap-5">
      <button className="bg-indigo-500 p-2 rounded-md" onClick={loadTodos}>
        Load Todo
      </button>
      <button className="bg-indigo-500 p-2 rounded-md" onClick={resetStore}>
        Remove Todos
      </button>
    </div>
  );
}

export default Actions;
