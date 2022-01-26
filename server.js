const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const path = require("path");
const db = require("./database/connection");
const jwt = require("jsonwebtoken");
// const router = require("./router");
const checkAuth = require("./checkAuth");
const SECRET = process.env.SECRET;
const server = express();

server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.json());
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/home/index.html"));
});
server.get("/posts", (req, res) => {
  res.sendFile(path.join(__dirname, "public/posts/index.html"));
});
server.get("/allposts", checkAuth, (req, res) => {
  // function home(req, res) {
  db.query(
    "SELECT text_content, username FROM tweets INNER JOIN users ON tweets.user_id = users.id "
  ).then((result) => {
    const tweets = result.rows;
    res.status(200).send(tweets);
  });
  // }
});
server.get("/signUp", (req, res) => {
  res.sendFile(path.join(__dirname, "public/signUp/index.html"));
});
server.get("/logIn", (req, res) => {
  res.sendFile(path.join(__dirname, "public/LogIn/index.html"));
});
server.post("/logIn", (req, res) => {
  const data = [req.body.username, req.body.password];
  db.query(
    "SELECT username , password FROM users WHERE username = $1 AND password = $2",
    data
  ).then(({ rows }) => {
    console.log(rows);
    if (
      rows.length > 0 &&
      rows[0].username == data[0] &&
      rows[0].password == data[1]
    ) {
      const payload = jwt.sign({ user: data[0] }, SECRET);
      res.cookie("username", payload, { maxAge: "5000000000" });
      res.send({ success: true });
    } else {
      res.send({ success: false, message: "Incorrect username or password" });
    }
  });
});

server.post("/signUp", (req, res) => {
  db.query();
  const newData = [
    req.body.username,
    req.body.password,
    req.body.age,
    req.body.location,
  ];
  db.query(
    "INSERT INTO users(username, password, age, location) VALUES ($1,$2,$3,$4)",
    newData
  ).then(() => {
    res.redirect("/logIn");
  });
});
server.get("/new_post", (req, res) => {
  res.sendFile(path.join(__dirname, "public/new_post/index.html"));
});
server.post("/new_post", checkAuth, (req, res) => {
  db.query("SELECT user_id FROM users WHERE username = 'data[0]'");
  const newt = [data[0], req.body.tweet];
  console.log(newt);
  db.query("INSERT INTO tweets(text_content) VALUES ($1)", newt).then(() => {
    res.reditect("/allposts");
  });
});
server.listen(3000, () =>
  console.log("Server listening on http://localhost:3000")
);
