const mongoose = require('mongoose');
const { Schema } = mongoose;

const drinkSchema = new Schema({
  name: String,
  image: String,
  alcohol: String,
  userId: Number
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;