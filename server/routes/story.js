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

router.post('/', (req, res) => {
  var newStory = new Story({
    title: req.body.title,
    content: req.body.content
  })
  newStory.save()
    .then(story => {
      res.json({ story: story })
    })
    .catch(err => {
      res.json({ error: err })
    })
})

router.put('/:id', (req, res) => {
  Story.findOneAndUpdate({ _id:req.params.id}, req.body, {upsert:true, returnNewDocument:true})
    .then(story => res.json({ newStory: story }))
    .catch(err => res.json({ error: err }))
})

router.delete('/:id', (req, res) => {
  Story.findOneAndRemove({ _id:req.params.id})
    .then(res.json({ message:'Success delete' }))
    .catch(err => res.json({ error: err }))
})

module.exports = router