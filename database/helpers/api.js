const axios = require('axios');
// const { DRINKS_TOKEN } = process.env;

function getCocktails(liquor) {
  /*
  pass in the info from the api to get the drink
  */
  const options = {
    method: 'get',
    url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`,
  }

  return axios(options);
}


// function filterDrinks(drinkObj) {
//   return drinkObj.map(drink => {
//     const { strDrink, strInstructions, strDrinkThumb, strIngredient1, strIngredient2 } = drink;
//     return {
//       name: strDrink,
//       liquor: [strIngredient1, strIngredient2],
//       image: strDrinkThumb,
//       instructions: strInstructions,
//     };
//   });
// }


module.exports = {
  getCocktails,
};