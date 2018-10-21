const express = require('express')
const mongoose = require('mongoose')



//login and authentication
const users = require('./routes/api/users')
//This is to for them to save details in their profile
const profile = require('./routes/api/profile')
//This is to to allow users to comment
const posts = require('./routes/api/posts')


const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello world'))

//Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
