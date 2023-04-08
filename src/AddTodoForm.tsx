import React from "react";

function AddTodoForm({ onAdd }: { onAdd: (todo_text: string) => void }) {
  const [value, setValue] = React.useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(value);
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
