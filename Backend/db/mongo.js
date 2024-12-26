const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
  console.log("mongodb connected");
}
