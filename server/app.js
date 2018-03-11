const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('./config')
const User = require('./models/user')
const bcrypt = require('bcrypt')
const app = express()
var port = process.env.PORT || 3001

mongoose.connect(config.database)

mongoose.Promise = global.Promise

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected...')
});

app.set('superSecret', config.secret)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var apiRoutes = express.Router()

// Middileware to verify token
const tokenVerifyMiddleware = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, app.get('superSecret'), (err, decoded) => {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });
  } else {
    return res.json({ 
        username: '', 
        email: ''
    });
  }
}

// Just some welcome message
apiRoutes.get('/', (req, res) => {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

apiRoutes.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

apiRoutes.post('/signup', (req, res) => {
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

apiRoutes.post('/login', (req, res) => {
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
				var token = jwt.sign(payload, app.get('superSecret'), {
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

apiRoutes.get('/userinfo', tokenVerifyMiddleware, (req, res) => {
	res.json({ userinfo: req.decoded })
});

app.use('/api', apiRoutes);

app.listen(port, () => {
	console.log(`app is listening on port ${port}...`)
})
