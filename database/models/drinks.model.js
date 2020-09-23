const mongoose = require('mongoose');
const { Schema } = mongoose;

const drinkSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  image: String,
  alcohol: String,
  userId: String,
  rating: {
    type: Number,
    default: 1
  }
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;