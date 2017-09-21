const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

let User = require('../../models/user')
let Post = require('../../models/post')

// Get posts from db
router.get('/', (req, res) => {
  Post.find()
    //grab the correponding user too
    .populate('author', 'username')
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
  Post.findById(req.params.id)
    .populate('author', 'username')
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
      }
      res.status(201).json({
        message: 'Post Found',
        obj: post
      })
    })
})

// Check token validity
router.use('/', (req, res, next) => {
  jwt.verify(req.query.token, 'bananas are blue', (err, decoded) => {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      })
    }
    next();
  })
})

/* Save post to db*/
router.post('/', (req, res) => {
  let decoded = jwt.decode(req.query.token)
  let id = decoded.user._id
  User.findById(id, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: 'User not found',
        error: err
      })
    }
    let post = new Post({
      content: req.body.content,
      author: user._id
    })
    console.log("Post to save:" + post)
    post.save((err, result) => {
      if (err) {
        return res.status(500).json({
          title: 'Post not saved',
          error: err
        })
      }

      user.posts.push(result)
      console.log(user.posts)
      res.status(201).json({
        message: 'Saved Post',
        obj: result
      })
      user.save()
    })
  })
})

// Update post
router.patch('/:id', (req, res) => {
  let decoded = jwt.decode(req.query.token)
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
      if (post.author != decoded.user._id) {
        return res.status(401).json({
          title: 'Not Authenticated',
          error: err
        })
      }
      post.content = req.body.content;
      post.author = req.body.userId;
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

// Delete post
router.delete('/:id', (req, res) => {
  let decoded = jwt.decode(req.query.token)
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
      if (post.author != decoded.user._id) {
        return res.status(401).json({
          title: 'Not Authenticated',
          error: {message: 'This is not your post'}
        })
      }
      post.remove((err) => {
        if (err) {
          return res.status(500).json({
            title: 'Did not remove post',
            error: err
          })
        } else {
          return res.status(201).json({
            title: 'Post removed',
            message: 'Post deleted from db'
          })
        }
      })
    })
})


module.exports = router
