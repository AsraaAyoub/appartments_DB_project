const express = require('express');
const router = express.Router();
const posts = require("./handlers/posts.js");
// const home = require(" ./handlers/home.js");
// const login = require(" ./handlers/login.js");
// const new_post = require(" ./handlers/new_post.js");
// const signup= require(" ./handlers/signup.js");
// router.get('/', handlers.home)
// router.get('/new-user', handlers.newUser)
// router.post('/create-user', handlers.createUser)
// router.get('/all-posts', posts.allPosts) //return json 
// router.get('/posts',posts.posts)
// router.use((req, res) => {
//   res.status(404).send(`<h1>Not found</h1>`)
// })
//  //return json 


module.exports = router;