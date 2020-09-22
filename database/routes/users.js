const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('GET ERROR:', err);
      res.sendStatus(404);
    });
});

router.route('/add').post((req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  console.log(newUser)
  newUser.save()
    .then(() => {
      res.json('User Added!')
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('POST ERROR: ', err);
      res.sendStatus(404);
    })
})

module.exports = router;