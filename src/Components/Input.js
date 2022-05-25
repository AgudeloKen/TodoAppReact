import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todo, setTodo, edit, setEdit }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodo(newTodo);
    setEdit("");
  };
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };
  return (
    <form className="flex items-center h-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        name="Task"
        placeholder="Task..."
        value={input}
        required
        onChange={handleChange}
        className="placeholder:text-lg my-5 mr-0.5 p-2 flex-1 rounded-lg text-gray-500 shadow-sm focus:ring-2 focus:ring-black outline-none dark:focus:ring-cyan-900"
      />
      <input
        type="submit"
        value={edit ? "OK" : "Add"}
        className="bg-transparent mr-2 py-2 px-3 h-10 rounded-lg text-sm font-bold cursor-pointer transition ease-out duration-500 hover:bg-gray-400 border-2 border-gray-500 hover:border-transparent dark:bg-transparent dark:hover:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:border-transparent"
      />
    </form>
  );
};

export default Form;
