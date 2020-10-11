// populate table function
const { query } = require('../app')

const populateTable = async (data) => {
    for (const {  title, ingredients, instructions, image } of data) {
      const res = await query(
        `
        INSERT INTO my_recipes (title, ingredients, instructions, image)
          VALUES ($1, $2, $3, $4)
        `,
        [title, ingredients, instructions, image] 
      );
      console.log(res);
    }
  };

const data = [
    {
      title: "Beans on Toast",
      ingredients: ["150g of beans", "150g of butter", "150g of toast"],
      instructions: `Put the butter in your mouth, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly. Season to taste.`,
      image: "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
    }
  ];
  
populateTable(data);