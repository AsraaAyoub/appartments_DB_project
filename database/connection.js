const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config({path:'workshop/.env'});
const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString });
console.log(connectionString)
db.query("SELECT * FROM USERS").then((result) => console.log(result.rows));


module.exports = db;
