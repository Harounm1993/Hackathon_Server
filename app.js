// require modules
const dotenv = require('dotenv').config()
const path = require("path");
const express = require("express");
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.json());


const pool = new Pool({
    user: 'ttoxpkaldyjnyp',
    host: 'ec2-18-203-7-163.eu-west-1.compute.amazonaws.com',
    database: 'd9e2qrf4vj2ns',
    password: 'b4734dea416f048560bb5e26c6780a4d3197be4605e45f5bf6858897af087005',
    port: 5432,
    uri:'postgres://ttoxpkaldyjnyp:b4734dea416f048560bb5e26c6780a4d3197be4605e45f5bf6858897af087005@ec2-18-203-7-163.eu-west-1.compute.amazonaws.com:5432/d9e2qrf4vj2ns', 
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

app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
  console.log("get request")
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})

module.exports = app;