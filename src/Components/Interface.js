import React, { useState, useEffect } from "react";
import Form from "./Input";
import TodoList from "./TodoList";

const Interface = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="flex flex-col gap-y-4 h-80vh w-96 bg-gray-200 rounded-3xl p-6 no-scrollbar overflow-y-auto dark:bg-gray-800 transition ease duration-500">
      <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
      />
      <TodoList todo={todo} setTodo={setTodo} setEdit={setEdit} />
    </div>
  );
};

export default Interface;
