// Get dependencies
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Get our API routes
const api = require('./server/routes/api')
const postRoutes = require('./server/routes/post')
const userRoutes = require('./server/routes/user')

const app = express()
mongoose.connect('mongodb://user:password@ds044689.mlab.com:44689/b1g-app', (err) => {
// mongoose.connect('mongodb://127.0.0.1:27017/synerG', (err) => {
  if (err) {
    console.log('db not connected')
  } else {
    console.log('CONNECTED TO SYNERG!')
  }
})

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')))

// Set our api routes
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/api', api)

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000'
app.set('port', port)

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`))

