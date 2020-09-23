const axios = require('axios');
// const config = require('config');

function getCocktails(drinks) {
  /*
  pass in the info from the api to get the drink
  */
  // const options = {
  //   method: 'get',
  //   url: 'https://the-cocktail-db.p.rapidapi.com/popular.php',
  //   headers: {
  //     // 'Authorization':
  //   }
  // }
  return drinks.map(drink => {
    const { strDrink, strInstructions, strDrinkThumb, strIngredient1, strIngredient2 } = drink;
    return {
      name: strDrink,
      liquor: [strIngredient1, strIngredient2],
      image: strDrinkThumb,
      instructions: strInstructions,
    };
  });
}

module.exports = getCocktails;