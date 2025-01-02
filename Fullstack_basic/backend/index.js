import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Mohini",
      content: "i am from chikhli",
    },
    {
      id: 2,
      name: "Avi",
      content: "i am from dungri",
    },
    {
      id: 3,
      name: "Chintan",
      content: "i am from ghej",
    },
    {
      id: 4,
      name: "Ravi",
      content: "i am from navsari",
    },
    {
      id: 5,
      name: "Heli",
      content: "i am from bilimora",
    },
  ];
  res.send(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
