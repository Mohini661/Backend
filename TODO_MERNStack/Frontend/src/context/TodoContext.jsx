import { createContext, useRef, useState } from "react";

export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // const name = "mohini"write all logic n func
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const host = "http://localhost:5001";
  const [todos, setTodos] = useState([]);

  const todoIdRef = useRef(null);
  const todoTaskRef = useRef(null);
  const descriptionRef = useRef(null);
  const isCompletedRef = useRef(null);

  // for alert msg
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });

    //hide alert after specified duration
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  //Add todo or update
  const addTodo = async (id, todoTask, description, isCompleted) => {
    const method = id ? "PUT" : "POST";
    const url = id
      ? `${host}/api/v1/todos/${id}`
      : `${host}/api/v1/todos/create-todo`;
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ todoTask, description, isCompleted }),
      });

      const todo = await response.json();
      setTodos((preTodos) =>
        id
          ? preTodos.map((t) => (t._id === id ? todo : t))
          : [...preTodos, todo]
      );
    } catch (error) {
      console.log("Error Adding Todo: ", error);
    }
  };

  //get All todos
  const getTodos = async () => {
    // setIsLoading(true);
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
    try {
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
    } catch (error) {
      console.log("Error delete todo:", error);
    }
  };

  // Update Todo
  // const updateTodo = async (id, todoTask, description, isCompleted) => {
  //   try {
  //     const response = await fetch(`${host}/api/v1/todos/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //       body: JSON.stringify({ todoTask, description, isCompleted }),
  //     });
  //     const todo = await response.json();
  //     console.log("response to",todo);

  //     const updatedTodo = todos.map((todo) =>
  //       todo._id === id ? { ...todo, todoTask, description, isCompleted } : todo
  //     );console.log("updated to");

  //     setTodos(updatedTodo);
  //   } catch (error) {
  //     console.log("Error updating todo:", error);
  //   }
  // };
  return (
    <todoContext.Provider
      value={{
        logout,
        todos,
        todoTaskRef,
        descriptionRef,
        isCompletedRef,
        todoIdRef,
        addTodo,
        getTodos,
        deleteTodo,
        isAuthenticated,
        alert,
        showAlert,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
