const { query } = require('./app')

async function createTable() {

  let queryText = "CREATE TABLE my_collection (id TEXT PRIMARY KEY, name TEXT, count INTEGER, whatILike TEXT)";
 
  let res = await query(queryText);

  console.log(res);

}

createTable()