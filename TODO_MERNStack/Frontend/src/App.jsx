import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TodoContextProvider from "./context/TodoContext";
import { Outlet } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Alert from "./components/Alert";

function App() {

  return (
    <div className="w-full min-h-screen block bg-gray-100">
      <TodoContextProvider>
        <Navbar />
        {/* <Alert /> */}
        {/* <AddTodo /> */}
        <Outlet />
      </TodoContextProvider>
    </div>
  );
}

export default App;
