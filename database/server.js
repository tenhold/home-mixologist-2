require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = process.env;
const cors = require('cors');

// request routes
const usersRouter = require('./routes/users');
const drinkRouter = require('./routes/drinks')

const DIST_DIR = path.join(__dirname, '../dist');
// const HTML_FILE = path.join(DIST_DIR, 'index.html');


const app = express();
app.use(bodyParser.json());
app.use(cors());

////////////////////////        Database connection           ////////////////////////   

mongoose.connect('mongodb://localhost/mixologist', {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
})
  .then(() => `server running ${PORT}`)
  .catch((err) => console.log('DATABASE ERROR: ', err))
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


app.use(express.static(DIST_DIR));


app.get('/', (req, res) => {
  res.status(200).send('hello world')
})

app.use('/users', usersRouter);
app.use('/drinks', drinkRouter);

////////////////////////        Server connection           ////////////////////////   

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
