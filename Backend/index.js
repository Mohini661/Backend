const express = require("express");
const cors = require("cors");
require("./db/mongo");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server listining on port number ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("hello express");
// });

// app.get("/hello", (req, res) => {
//   res.json({ name: "chintan", age: 21 });
// });

//all routes
app.use("/api", require("./routes/userRoute"));
