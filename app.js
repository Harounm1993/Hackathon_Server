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

//line 44-53 all requred for task 1.
// get: tells servers what to do with http request 
app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
  console.log("get request")
});
//listen : tells server on port 500 for these requests
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})

module.exports = app;