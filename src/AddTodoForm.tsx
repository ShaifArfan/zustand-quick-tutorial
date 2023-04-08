import React from "react";
import { useTodoStore } from "./store/todo.store";

function AddTodoForm() {
  const [value, setValue] = React.useState<string>("");
  const { addTodo, todos } = useTodoStore((state) => state);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          id: todos.length + 1,
          title: value,
          completed: false,
        });
        setValue("");
      }}
    >
      <div className="flex gap-3 justify-center mt-5">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-md text-black text-xl pl-2"
        />
        <button className="bg-indigo-500 p-2 rounded-md" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
