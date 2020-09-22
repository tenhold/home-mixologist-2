const axios = require('axios');
const config = require('config');

const getCocktails = (drink) => {
  /*
  pass in the info from the api to get the drink
  */
  const options = {
    method: 'get',
    url: 'https://the-cocktail-db.p.rapidapi.com/popular.php',
    headers: {
      // 'Authorization':
    }
  }
};

module.exports = getCocktails;