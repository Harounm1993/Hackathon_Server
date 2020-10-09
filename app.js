// require modules
const dotenv = require('dotenv').config()
const path = require("path");
const express = require("express");
const { Pool } = require('pg');

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

  async function createTable() {

    let queryText = "CREATE TABLE my_collection (id TEXT PRIMARY KEY, name TEXT, count INTEGER, whatILike TEXT)";
   
    let res = await pool.query(queryText);
  
    console.log(res);
  
  }
  
  createTable()

  module.exports = {
      query: (text, params, callback) => {
      return pool.query(text, params, callback)
  },
}

const data = [
  {
    title: "Beans on Toast",
    ingredients: ["150g of beans", "150g of butter", "150g of toast"],
    instructions: `Put the butter in your mouth, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly.

  Season to taste.`,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
  }
];

app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
  console.log("get request")
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})

module.exports = app;