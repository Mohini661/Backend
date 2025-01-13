import React, { useContext, useRef, useState } from "react";
import { todoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(todoContext);

  const [todo, setTodo] = useState({
    todoTask: "",
    description: "",
    isCompleted: false,
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      addTodo(todo.todoTask, todo.description, todo.isCompleted);
      setTodo({ todoTask: "", description: "", isCompleted: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className=" flex justify-center bg-gray-100 mb-7">
        <div className="max-w-lg w-full mt-4 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Add New Todo
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="todoTask"
                className="block text-sm font-medium text-gray-600"
              >
                Todo Task
              </label>
              <input
                type="text"
                id="todoTask"
                name="todoTask"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-300 focus:outline-none"
                placeholder="Enter the task name"
                value={todo.todoTask}
                onChange={handleChange}
                // ref={todoTask}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-300 focus:outline-none"
                placeholder="Enter a description"
                value={todo.description}
                onChange={handleChange}
                // ref={description}
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="isCompleted"
                name="isCompleted"
                className="w-4 h-4 text-purple-600 focus:ring focus:ring-purple-300 border-gray-300 rounded"
                checked={todo.isCompleted}
                onChange={handleChange}
                // ref={isCompleted}
              />
              <label
                htmlFor="isCompleted"
                className="ml-2 text-sm font-medium text-gray-600"
              >
                Mark as Completed
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
