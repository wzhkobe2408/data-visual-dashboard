var express = require('express')
var router = express.Router()

var userRoute = require('./user.js')
var storyRoute = require('./story.js')

router.use('/api', userRoute)
router.use('/story', storyRoute)

module.exports = router