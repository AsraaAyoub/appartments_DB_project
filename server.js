const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");
const db = require("./database/connection");
// const home = require("handlers/home.js");
// const login = require("handlers/login.js");
// const new_post = require("hanlers/new_post.js");
// const posts = require("handlers/posts.js");
// const signup = require("handlers/signup.js");
const { parse } = require("dotenv");
const router = require("./router");
const { user } = require("pg/lib/defaults");

const SECRET = process.env.SECRET;

const server = express();

server.use(cookieParser());
server.use(express.urlencoded());

// server.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
// function checkAuth(req, res, next) {
//   const user = req.user;
//   if (!user) {
//     res.status(401).send(`
//       <h1>Please log in to view this page</h1>
//       <a href="/log-in">Log in</a>
//       <link rel="stylesheet" href="style.css">
//     `);
//   } else {
//     next();
//   }
// }
server.use(express.static("public"));
server.use(router);
//server.listen(3000,()=>{
// console.log("Server listening on http:localhost:3000");
//})
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/home/index.html"));
});
server.get("/posts", (req, res) => {
  res.sendFile(path.join(__dirname, "public/posts/index.html"));
});
server.get("/allposts", (req, res) => {
  //function home(req, res) {
  db.query("SELECT text_content FROM tweets").then((result) => {
    const tweets = result.rows;
    // create a list item for each user in the array
    //const userList = users.map(user => `<li>${user.username}</li>`);
    // use .join to turn the array into a string
    res.status(200).send(tweets);
  });
});

server.listen(3000, () =>
  console.log("Server listening on http://localhost:3000")
);
