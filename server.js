const express = require('express')
const app = express()
const mongoose = require('mongoose')
// Passport is authentication middleware for Node.js.
const passport = require('passport') 
//A session will contain some unique data about that 
//client to allow the server to keep track of the user’s state. 
//In session-based authentication, the user’s state is stored 
//in the server’s memory or a database.
const session = require('express-session')
//This module exports a single function which takes an instance of connect 
//(or Express) and returns a MongoDBStore class that can be used to store sessions 
//in MongoDB.
const MongoStore = require('connect-mongo')(session)
//Flash is an extension of connect-flash with the ability 
//to define a flash message and render it without redirecting 
//the request
const flash = require('express-flash')
//HTTP request logger middleware for node.js
const logger = require('morgan')
//This Connects to Mongoose/MongoDB
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

// Connects to MongoDB
connectDB()

//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    