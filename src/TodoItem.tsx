import React from "react";
import { Todo } from "./App";
import { MdDelete } from "react-icons/md";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
  onToggle: (id: number) => void;
}

function TodoItem({ todo, onDelete, onEdit, onToggle }: TodoItemProps) {
  return (
    <li className="flex bg-slate-700 p-2 rounded-md align-middle justify-center mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="mr-2"
        onClick={() => onToggle(todo.id)}
      />
      <input
        className={`flex-1 bg-transparent ${
          todo.completed ? "line-through" : ""
        }`}
        value={todo.title}
        onChange={(e) => onEdit(todo.id, e.target.value)}
      ></input>
      <button onClick={() => onDelete(todo.id)}>
        <MdDelete></MdDelete>
      </button>
    </li>
  );
}

export default TodoItem;
