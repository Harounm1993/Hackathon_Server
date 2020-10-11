// require modules
const dotenv = require('dotenv').config()
const path = require("path");
const express = require("express");// task 1: 
const { Pool } = require('pg');
//const populate = require('./scripts/populate-table');
let data; 

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
});



//all required for task 1.
// get: tells servers what to do with http request 
app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
  console.log("get request")
});


app.get("/api/recipes", function (req, res) {
  let data = (req.body);
  res.json({ payload : data });
  console.log("get request")
});

app.post("/api/recipes", async (req, res) =>  {

  // destructure 
    const { title, ingredients, instructions, image } = req.body;
  
  let result = databaseInteraction(
      `
      INSERT INTO my_recipes (title, ingredients, instructions, image)
        VALUES ($1, $2, $3, $4)
      `,
      [title, ingredients, instructions, image] 
    );
    console.log(result);

    res.send(res.body)
  
});


//listen : tells server on port 500 for these requests
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})

module.exports = { app, query: (text, params, callback) => {
  return pool.query(text, params, callback)}, };

  // populate table included in this as exporting creates a loop

async function databaseInteraction(query, values) {
    const res = await pool.query(query, values)
    console.log(res);
};
