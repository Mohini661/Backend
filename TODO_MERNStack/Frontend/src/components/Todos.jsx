import React, { useContext, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { todoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const { todos, getTodos, deleteTodo, updateTodo } = useContext(todoContext);
  const navigate = useNavigate();

  useEffect(() => {
    getTodos();
  }, [todos]);
  // console.log(todos);

  // const ref = useRef(null);
  // const refClose = useRef(null);
  // const [todo, setTodo] = useState({
  //   etodoTask: "",
  //   edescription: "",
  //   eisCompleted: false,
  // });
  // const editTodo = (currentTodo) => {
  //   ref.current.click();
  //   setTodo({
  //     etodoTask: currentTodo.todoTask,
  //     edescription: currentTodo.description,
  //     eisCompleted: currentTodo.isCompleted,
  //   });
  // };

  // const handleClick = (e) => {
  //   console.log("Updating the todo...", todo);
  //   updateTodo(todo.etodoTask, todo.edescription, todo.eisCompleted);
  //   refClose.current.click();
  // };

  return (
    <>
      <AddTodo />
      {todos.length > 0 ? (
        <>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
              Your To-Do List
            </h1>

            <div className="bg-white shadow-md rounded-lg">
              <ul>
                {todos.map((todo, index) => (
                  <li
                    key={todo.id || index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b ${
                      todo.isCompleted ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={todo.isCompleted}
                          readOnly
                          className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-300"
                        />
                        <span
                          className={`text-lg font-medium ${
                            todo.isCompleted
                              ? "line-through text-gray-400"
                              : "text-gray-800"
                          }`}
                        >
                          {todo.todoTask}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {todo.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                      <button
                        className="text-blue-500 hover:text-blue-700 transition"
                        onClick={() => editTodo(todo._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700 transition"
                        onClick={() => deleteTodo(todo._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-3xl text-center mt-6 font-bold hover:text-gray-500">
          Login to read Todos
        </h1>
      )}
    </>
  );
};

export default Todos;
