require("dotenv").config();
const path = require("path");
const express = require("express");

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({ message: "You have entered Kat's API" });
});

app.get("/api/users", (req, res) => {
  res.json({
    users: [{ username: "Sam" }, { username: "Kat" }, { username: "Clem" }],
  });
});

app.post("/api/register", (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

app.post("/api/login", (req, res) => {
  if (req.body.username && req.body.password) {
    res.status(200).json({ message: `Welcome ${req.body.username}` });
  } else {
    res.status(400).json({ message: "you are missing username or password" });
  }
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
