import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { MdDelete, MdEdit } from "react-icons/md";
import TodoItem from "./TodoItem";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  const addTodo = (todo_text: string) => {
    if (todo_text.length < 1) return;
    const newTodo = {
      id: todos.length + 1,
      title: todo_text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id: number, newTitle: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen">
      <div className="container m-auto px-5 pt-5">
        <h1 className="text-center text-3xl">TODO App</h1>
        <AddTodoForm onAdd={addTodo}></AddTodoForm>
        <ul className="mt-5">
          {todos.length < 1
            ? "No Todos"
            : todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                  onToggle={toggleTodo}
                ></TodoItem>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
