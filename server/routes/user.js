const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let User = require('../../models/user')

// Get users from db
router.get('/', (req, res) => {

})

// Get user from db
router.get('/:id', (req, res) => {

})


// Save user to db
router.post('/', (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 12),
  })
  user.save((err, result) => {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    } else {
      res.status(201).json({
        message: 'Saved User',
        obj: result
      })
    }
  })
})

// Login
router.post('/login', (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      })
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      })
    }
    let token = jwt.sign({user: user}, 'bananas are blue', {expiresIn: 7200})
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id
    })
  })
})

// Update user
router.patch('/:id', (req, res) => {

})

// Delete user
router.delete('/:id', (req, res) => {

})


module.exports = router
