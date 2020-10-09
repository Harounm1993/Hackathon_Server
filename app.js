// require modules
const dotenv = require('dotenv').config()
const path = require("path");
const express = require("express");// task 1: 
const { Pool } = require('pg');

//next 5 lines part of task 1
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.json());

// create pool using process env to hide credentials
const pool = new Pool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
  uri: process.env.uri,
  ssl: {
    rejectUnauthorized : false }
})
  
// create table function

// async function createTable() {

//   let queryText = "CREATE TABLE my_recipes11 (user_id SERIAL PRIMARY KEY, title TEXT, ingredients TEXT, instructions TEXT, image TEXT)";
  
//   let res = await pool.query(queryText);

//   console.log(res);

// }






//populateTable(data);



//all required for task 1.
// get: tells servers what to do with http request 
app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
  console.log("get request")
});


app.get("/api/recipes", function (req, res) {
  res.json({ payload : data });
  console.log("get request")
});

app.post("/api/recipes", function (req, res) {
  data.push(req.body);
  res.json({ 
    message: "post request success",
     payload: req.body
    });

});

//listen : tells server on port 500 for these requests
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})

module.exports = { app, query: (text, params, callback) => {
  return pool.query(text, params, callback)}, };