const jwt = require('jsonwebtoken')
const config = require('../config')

// Middileware to verify token
const tokenVerifyMiddleware = (app) => (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {      
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

module.exports = tokenVerifyMiddleware