const express = require('express')
const router = express.Router()

let User = require('../../models/user')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('API!!!!!!!!!!!')
})

module.exports = router
