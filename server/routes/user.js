var express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var tokenVerifyMiddleware = require('../middleware/auth')
const config = require('../config')

const User = require('../models/user')
const Story = require('../models/story')

// Just some welcome message
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// Get all the user
router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

// Signup
router.post('/signup', (req, res) => {
  var newUser = new User({ 
    username: req.body.username, 
    password: req.body.password,
    email: req.body.email
	});
	newUser.save((err, user) => {
		if (err) {
			res.json({ error: "There is an error happened" })
		} else {
			res.json({ user: user })
		}
	})
});

// Login
router.post('/login', (req, res) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (!bcrypt.compareSync(req.body.password, user.password)) {
				res.json({ message:'Password does not match' })
			} else {
				const payload = {
					admin: user.admin,
					username: user.username,
					email: user.email
				}
				var token = jwt.sign(payload, config.secret, {
					expiresIn: '1d'
				});
				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token
				});
			}
		})
		.catch(err => {
			res.json( {error: 'An error happened when finding user' } )
		})
});

// Get userInfo
router.get('/userinfo', tokenVerifyMiddleware, (req, res) => {
	res.json({ userinfo: req.decoded })
});

module.exports = router