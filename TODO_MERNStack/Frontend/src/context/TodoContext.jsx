import { createContext, useRef, useState } from "react";

export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // const name = "mohini"write all logic n func
  const host = "http://localhost:5000";
  const [todos, setTodos] = useState([]);

  //for alert msg
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // };

  //Add todo
  const addTodo = async (todoTask, description, isCompleted) => {
    const response = await fetch(`${host}/api/v1/todos/create-todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ todoTask, description, isCompleted }),
    });

    const todo = await response.json();
    setTodos((preTodos) => [...preTodos, todo]);
  };

  //get All todos
  const getTodos = async () => {
    try {
      const response = await fetch(`${host}/api/v1/todos/all-todos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const todo = await response.json();
      setTodos(todo.data);
    } catch (error) {
      console.log("Error get todos: ", error);
    }
  };

  //Delete Todo
  const deleteTodo = async (id) => {
    const response = await fetch(`${host}/api/v1/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const newTodo = todos.filter((todo) => todo._id !== id);
    const todo = await response.json();
    setTodos(newTodo);
  };

  //Update Todo
  const updateTodo = async (id) => {
    try {
      const response = await fetch(`${host}/api/v1/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ todoTask, description, isCompleted }),
      });
      const todo = await response.json();
      console.log(todo);

      //create copy of todos to update state
      //  const updatedTodo = JSON.parse(JSON.stringify(todos))

      const updatedTodos = todos.map((todo) =>
        todo._id === id ? { ...todo, todoTask, description, isCompleted } : todo
      );
      setTodos(updatedTodos);

      // setTodos((prevTodos) =>
      //   prevTodos.map((todo) => (todo._id === id ? updatedTodoRes : todo))
      // );
    } catch (error) {
      console.log("Error updating todo:", error);
    }
  };
  return (
    <todoContext.Provider
      value={{
        todos,

        addTodo,
        getTodos,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
