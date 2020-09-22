const mongoose = require('mongoose');
const { Schema } = mongoose

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

const User = mongoose.model('User', UsersSchema);

module.exports = User;