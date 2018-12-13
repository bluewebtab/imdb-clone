const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const bodyParser = require('body-parser')
const passport = require('passport')
const serveStatic = require("serve-static");

//login and authentication
const users = require('./routes/api/users')
//This is to for them to save details in their profile
const profile = require('./routes/api/profile')
//This is to to allow users to comment
const movie = require('./routes/api/movie')


const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport)


//Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/movie', movie)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  })
}




const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
