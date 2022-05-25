import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";

const TodoList = ({ todo, setTodo, setEdit }) => {
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todo) => todo.id === id);
    setEdit(findTodo);
  };
  const handleComplete = (e) => {
    setTodo(
      todo.map((item) => {
        if (item.id === e.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <>
      {todo.map((e) => (
        <li
          key={e.id}
          className={`py-2 px-4 ${
            e.completed
              ? "line-through decoration-2 decoration-black dark:decoration-white"
              : "no-underline"
          } flex items-center bg-gray-300 rounded-lg justify-between dark:bg-gray-900 transition ease duration-500 h-12`}
        >
          <input
            className="text-black text-lg bg-transparent w-52 sm:w-auto outline-none caret-transparent dark:text-white"
            type="text"
            value={e.title}
            autoComplete="off"
            onChange={(e) => {
              e.preventDefault();
            }}
          />
          <div className="flex items-center space-x-2">
            <IoMdCheckmarkCircleOutline
              onClick={() => handleComplete(e)}
              className="text-2xl cursor-pointer text-green-600"
            />
            <MdOutlineModeEditOutline
              onClick={() => handleEdit(e)}
              className="text-2xl cursor-pointer text-yellow-200"
            />
            <IoTrashOutline
              onClick={() => handleDelete(e)}
              className="text-2xl cursor-pointer text-red-600"
            />
          </div>
        </li>
      ))}
    </>
  );
};

export default TodoList;
