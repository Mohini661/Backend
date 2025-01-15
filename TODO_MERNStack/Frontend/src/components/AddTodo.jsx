import React, { useContext, useEffect, useRef, useState } from "react";
import { todoContext } from "../context/TodoContext";

const AddTodo = ({ isEditing, resetForm }) => {
  const {
    addTodo,
    todoTaskRef,
    descriptionRef,
    isCompletedRef,
    todoIdRef,
    getTodos,
    showAlert,
  } = useContext(todoContext);

  // useEffect(() => {
  //   // Update the state whenever `todoIdRef` changes
  //   if (todoIdRef.current?.value) {
  //     console.log(todoTaskRef.current?.value);

  //     setIsEditing(true);
  //   } else {
  //     console.log(todoIdRef.current?.value);

  //     setIsEditing(false);
  //   }
  // }, [todoIdRef.current?.value]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Accessing values from refs
    let todoId = todoIdRef.current.value;
    let todoTask = todoTaskRef.current.value;
    let description = descriptionRef.current.value;
    let isCompleted = isCompletedRef.current.checked;
    // console.log("Form cleared:", {
    //   todoId,
    //   todoTask,
    //   description,
    //   isCompleted,
    // });
    try {
      await addTodo(todoId, todoTask, description, isCompleted);

      //Clearing the form after submission
      todoIdRef.current.value = "";
      todoTaskRef.current.value = "";
      descriptionRef.current.value = "";
      isCompletedRef.current.checked = false;
      showAlert("Added Successfully!!", "success");
      getTodos();
      resetForm(); //reset form to add mode
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
              <input
                type="hidden"
                id="todoId"
                name="todoId"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-300 focus:outline-none"
                ref={todoIdRef}
                // required
              />
            </div>
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
                // value={todo.todoTask}
                // onChange={handleChange}
                ref={todoTaskRef}
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
                // value={todo.description}
                // onChange={handleChange}
                ref={descriptionRef}
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="isCompleted"
                name="isCompleted"
                className="w-4 h-4 text-purple-600 focus:ring focus:ring-purple-300 border-gray-300 rounded"
                // checked={todo.isCompleted}
                // onChange={handleChange}
                ref={isCompletedRef}
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
              {isEditing ? "Update Todo" : "Add Todo"}
              {/* Add Todo */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
