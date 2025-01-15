import React, { useContext, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { todoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { todos, isAuthenticated } = useContext(todoContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Todos />
    </>
  );
};

export default Home;
