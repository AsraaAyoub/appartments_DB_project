const express = require('express');
const router = express.Router();
const posts = require("./handlers/posts");
const home = require(" ./handlers/home");
const login = require(" ./handlers/login");
const new_post = require(" ./handlers/new_post");
const signup= require(" ./handlers/signup");
// router.get('/', handlers.home)
// router.get('/new-user', handlers.newUser)
// router.post('/create-user', handlers.createUser)
router.get('/all-posts', posts.allPosts) //return json 
router.get('/posts',posts.posts)
router.use((req, res) => {
  res.status(404).send(`<h1>Not found</h1>`)
})
 //return json 


module.exports = router;