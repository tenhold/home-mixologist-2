const router = require('express').Router();
const Drink = require('../models/drinks.model');
// const { drinks } = require('../../data.json');

router.route('/').get((req, res) => {
  Drink.find()
    .then(drink => res.status(200).send(drink))
    .catch(err => {
      console.log('GET ERROR:', err);
      res.sendStatus(404);
    });
});

router.route('/add').post((req, res) => {
  console.log(req.body);
  // const { username } = req.body;
  // const newUser = new Drink({ username });
  // console.log(newUser)
  // newUser.save()
  //   .then(() => {
  //     res.status(201).send(newUser)
  //   })
  //   .catch(err => {
  //     console.log('POST ERROR: ', err);
  //     res.sendStatus(404);
  //   })
})



module.exports = router;

////////////////////        mock up of return array           //////////////////////////////

// const drinkName = drinks.map(drink => {
//   const { strDrink,  strInstructions, strDrinkThumb, strIngredient1, strIngredient2 } = drink;
//   return { 
//     drink: strDrink,  
//     liquor: [strIngredient1, strIngredient2],
//     image: strDrinkThumb, 
//     instructions: strInstructions, 
//   };
// });

// console.log(drinkName);


//////////////////////////////////////////////////////////////////////////////////////////////

