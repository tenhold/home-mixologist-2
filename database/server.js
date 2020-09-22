require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const { PORT } = process.env;


const app = express();


mongoose.connect('mongodb://localhost/mixologist', {
  useNewUrlParser: true, useUnifiedTopology: true
});


// app.get('/', (req, res) => {
  
// })


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
