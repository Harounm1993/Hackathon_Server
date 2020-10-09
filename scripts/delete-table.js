const { query } = require('../app')


async function deleteTable() {
    let queryText = "DROP TABLE IF EXISTS my_recipes";
    let res = await query(queryText);
    console.log(res);
  }

  deleteTable()
