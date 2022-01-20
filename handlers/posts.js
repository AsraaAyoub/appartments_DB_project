//all posts function 
//posts function return html 
function allPosts(req, res) {
  db.query("SELECT username FROM users").then(result => {
    const users = result.rows;
  })
}
function posts(req, res) {
  db.query("SELECT username FROM users").then(result => {
    const users = result.rows;
  })
}