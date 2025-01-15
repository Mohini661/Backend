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

  const alertStyles = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="h-12">
      {alert && (
        <div
          className={`alert alert-${alert.type} ${
            alertStyles[alert.type] || ""
          } p-4 rounded-md shadow-md`}
          role="alert"
        >
          <strong className="font-semibold mr-2">
            {capitalize(alert.type)}
          </strong>
          <span>{alert.message}</span>
        </div>
      )}
    </div>
  );
};

export default Alert;
