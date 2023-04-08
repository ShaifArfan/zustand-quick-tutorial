import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

interface TodoStore {
  todos: Todo[] | [];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
  loadTodos: () => Promise<void>;
  resetStore: () => void;
}

export const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        todos: [],

        loadTodos: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          const data: Todo[] = await response.json();
          set({ todos: data });
        },

        resetStore: () => set({ todos: [] }),

        addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

        removeTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),

        toggleTodo: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          })),

        editTodo: (id, title) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, title } : todo
            ),
          })),
      }),
      {
        name: "todo-store",
      }
    )
  )
);
