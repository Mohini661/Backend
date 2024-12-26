const express = require("express");
const User = require("../models/user");

const router = express();

router.post("/user", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." }); // Send error response
  }
  //   res.json({ message: "ok" });
});

router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
