const router = require('express').Router();
const Drink = require('../models/drinks.model');
const { drinks } = require('../../data.json');

// get 
// router.Route('/').get((req, res) => {
//   // 
// });

// post








////////////////////        mock up of return array           //////////////////////////////

const drinkName = drinks.map(drink => {
  const { strDrink,  strInstructions, strDrinkThumb, strIngredient1, strIngredient2 } = drink;
  return { 
    drink: strDrink,  
    liquor: [strIngredient1, strIngredient2],
    image: strDrinkThumb, 
    instructions: strInstructions, 
  };
});

console.log(drinkName);


//////////////////////////////////////////////////////////////////////////////////////////////



module.exports = {
  drinkName
}