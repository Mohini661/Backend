import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Full Stack Basic</h1>
      <p>Users:{users.length}</p>

      {users.map((user, index) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
