import React, { useContext } from "react";
import { todoContext } from "../context/TodoContext";

const Alert = () => {
  const { alert } = useContext(todoContext);
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error"; // Map "danger" to "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  // Determine the alert style based on the alert type
  const alertStyle = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-700 border-green-400";
      case "error":
        return "bg-red-100 text-red-700 border-red-400";
      case "warning":
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      case "info":
        return "bg-blue-100 text-blue-700 border-blue-400";
      default:
        return "bg-gray-100 text-gray-700 border-gray-400";
    }
  };

  return (
    <div className="h-12">
      {alert && (
        <div
          className={`flex items-center px-4 py-2 border rounded-md ${alertStyle(
            alert.type
          )}`}
          role="alert"
        >
          <strong className="font-semibold mr-2">
            {capitalize(alert.type)}
          </strong>
          <span>{alert.msg}</span>
        </div>
      )}
    </div>
  );
};

export default Alert;
