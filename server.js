
// load http module
const http = require('http')

// load third party Express module
const express = require('express')
const app = express()

// load own modules
const logger = require('./modules/logger')

// Integrate Middleware
app.use(logger);

// define the routes
app.get('/', (req, res) => {
  
  res.send({ error: 'This is an error message.'})
})

app.get('/users/:name?', (req, res) => {

  path = req.path
  method = req.method
  username = req.params.name

  res.send( {Path: path, Method: method, Username: username} )

})

// define Middleware
var r1 = function (req, res, next) {
  console.log('this is r1 ! The request will be responded by r4');
  next();
}

var r2 = function (req, res, next) {
  console.log('This is r2 ! The request will be responded by r4');
  next();
}

var r3 = function (req, res, next) {
  console.log('This is r3 ! The request will be responded by r4');
  next();
}

var middlewareArray = [r1, r3, r2]

app.get('/example', middlewareArray, (req, res) => {
        res.send('This is example and show some Middleware')
})

app.get('/about', (req, res) => {
  res.send('Hello, this is my about Page')
})

// create the server
const server = http.createServer(app);

// server listen for any incoming requests
server.listen(3000);

console.log('Server is running on PORT:3000, Visit http://localhost:3000')