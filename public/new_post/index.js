// const { redirect } = require("express/lib/response");
// const jsonwebtoken = require("jsonwebtoken");
// console.log("jsonwebtoken");
const tweet = document.getElementById("form");
// const tweet = document.getElementById("tweet");

tweet.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/allposts";
  console.log(tweet.rows);
});
