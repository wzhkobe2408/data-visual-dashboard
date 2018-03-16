const express = require('express')
const config = require('./config')
const app = express()

app.set('superSecret', config.secret)

require('./database/index.js')

const globalMiddleWare = require('./middleware/global')
globalMiddleWare(app)

var apiRoute = require('./routes')

app.use('/api', apiRoute)

var port = process.env.PORT || 3001

app.listen(port, () => {
	console.log(`app is listening on port ${port}...`)
})
