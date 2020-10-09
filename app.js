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

async function createTable() {

  let queryText = "CREATE TABLE my_recipes4 (id SERIAL PRIMARY KEY, title TEXT, ingredients TEXT, instructions TEXT, image TEXT)";
 
  let res = await pool.query(queryText);

  console.log(res);

}

createTable()

// populate table function
const populateTable = async () => {
  for (const { id, title, ingredients, instructions, image } of data) {
    const res = await pool.query(
      `
      INSERT INTO my_recipes4 (id SERIAL PRIMARY KEY, title TEXT, ingredients TEXT, instructions TEXT, image TEXT)
        VALUES ($1, $2, $3, $4, $5)
      `,
      [id, title, ingredients, instructions, image] 
    );
    console.log(res);
  }
};

const data = [
  {
    id: "1",
    title: "Beans on Toast",
    ingredients: ["150g of beans", "150g of butter", "150g of toast"],
    instructions: `Put the butter in your mouth, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly.

  Season to taste.`,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
  }
];


populateTable(data);



//line 44-53 all requred for task 1.
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

module.exports = app;