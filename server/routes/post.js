const express = require('express')
const router = express.Router()

let Post = require('../../models/post')

// Get posts from db
router.get('/', (req, res) => {
  Post.find()
    .exec((err, posts) => {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      } else {
        res.status(201).json({
          message: 'Saved Post',
          obj: posts
        })
      }
    })
})

// Get post from db
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  Post.findById(req.params.id)
    .exec((err, post) => {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      if (!post) {
        return res.status(404).json({
          title: 'Post not found',
          error: err
        })
      }else {
        res.status(201).json({
          message: 'Post Found',
          obj: post
        })
      }
    })
})


/* Save post to db*/
router.post('/', (req, res) => {
  let post = new Post({
    content: req.body.content,
    author: req.body.author
  })
  post.save((err, result) => {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    } else {
      res.status(201).json({
        message: 'Saved Post',
        obj: result
      })
    }
  })
})

// Update post
router.patch('/:id', (req, res) => {
  Post.findById(req.params.id)
    .exec((err, post) => {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      if (!post) {
        return res.status(404).json({
          title: 'Post not found',
          error: 'Post not found'
        })
      }
      post.content = req.body.content;
      post.author = req.body.author;
      post.save((err, result) => {
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          })
        } else {
          res.status(200).json({
            message: 'Updated Post',
            obj: result
          })
        }
      })
    })
})


module.exports = router
