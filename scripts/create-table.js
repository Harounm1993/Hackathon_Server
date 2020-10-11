const { query } = require('../app')

async function createTable() {
  let queryText = "CREATE TABLE my_recipes (id SERIAL PRIMARY KEY, title TEXT, ingredients TEXT, instructions TEXT, image text)";
  let res = await query(queryText);
  console.log(res);
}

createTable();