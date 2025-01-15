import React, { useContext, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { todoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

import { MdDelete, MdEdit } from "react-icons/md";

const Todos = () => {
  const {
    todos,
    getTodos,
    deleteTodo,
    todoTaskRef,
    descriptionRef,
    isCompletedRef,
    todoIdRef,
    showAlert,
    addTodo,
  } = useContext(todoContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        await getTodos();
      } catch (error) {
        console.log("Error fetching todos!", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);
  // console.log(todos);

  const handleUpdate = (todo) => {
    // console.log(todo);
    todoIdRef.current.value = todo._id || "";
    todoTaskRef.current.value = todo.todoTask || "";
    descriptionRef.current.value = todo.description || "";
    isCompletedRef.current.checked = todo.isCompleted || false;
    setIsEditing(true);
    // updateTodo(todoId, todoTask, description, isCompleted);
  };
  const resetForm = () => {
    setIsEditing(false);
  };

  return (
    <>
      <AddTodo isEditing={isEditing} resetForm={resetForm} />

      {isLoading ? (
        // <Loading />
        <h1 className="text-3xl text-center mt-6 font-bold hover:text-gray-500">
          Loading.....
        </h1>
      ) : (
        <>
          {/* <AddTodo /> */}
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
                        onClick={() => handleUpdate(todo)}
                      >
                        {/* Edit */}
                        <MdEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-700 transition"
                        onClick={() => {
                          deleteTodo(todo._id);
                          showAlert("Deleted Successfully", "success");
                        }}
                      >
                        {/* Delete */}
                        <MdDelete />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Todos;
