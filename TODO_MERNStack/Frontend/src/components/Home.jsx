import React, { useContext, useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { todoContext } from "../context/TodoContext";

const Home = () => {
  const { todos } = useContext(todoContext);
  return (
    <>
        <Todos />
      {/* {todos.length > 0 ? (
      ) : (
        <h1 className="text-3xl text-center mt-6 font-bold hover:text-gray-500">
          Login to read Todos
        </h1>
      )} */}
    </>
  );
};

export default Home;
