const express = require("express");
const cookieParser=require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const home = require("handlers/home.js");
// const login = require("handlers/login.js");
// const new_post = require("hanlers/new_post.js");
// const posts = require("handlers/posts.js");
// const signup = require("handlers/signup.js");
const { parse } = require("dotenv");
const router = require("./router");

const SECRET =process.env.SECRET;

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
  server.listen(3000,()=>{
    console.log("Server listening on http:localhost:3000");
})








