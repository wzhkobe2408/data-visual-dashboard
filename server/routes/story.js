var express = require('express')
var router = express.Router()
var tokenVerifyMiddleware = require('../middleware/auth')
const config = require('../config')

const User = require('../models/user')
const Story = require('../models/story')

router.get('/', (req, res) => {
  Story.find({})
    .then(stories => res.json({ stories: stories }))
    .catch(err => {
      res.json({ massage: 'error happend' })
    })
})

router.post('/', tokenVerifyMiddleware, (req, res) => {
  User.findOne({email:req.decoded.email})
    .then(user => {
      var newStory = new Story({
        title: req.body.title,
        content: req.body.content
      })
      newStory.save()
        .then(story => {
          user.story.push(story._id)
          user.save()
          res.json({ story: story })
        })
    })
    .catch(err => {
      res.json({ error: err })
    })
})

router.put('/:id', tokenVerifyMiddleware, (req, res) => {
  Story.findOneAndUpdate({ _id:req.params.id}, req.body, {upsert:true, returnNewDocument:true})
    .then(story => res.json({ newStory: story }))
    .catch(err => res.json({ error: err }))
})

router.delete('/:id', tokenVerifyMiddleware, (req, res) => {
  User.findOne({email:req.decoded.email})
    .then(user => {
      Story.findOneAndRemove({ _id:req.params.id})
        .then(() => {
          user.story.remove(req.params.id) 
          user.save()
          res.json({ message:'Success delete' })
        })
    })
    .catch(err => res.json({ error: err }))
})

module.exports = router