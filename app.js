const path = require("path");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.json());

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
});
