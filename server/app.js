const express = require('express')
const config = require('./config')
const app = express()

app.set('superSecret', config.secret)

app.set('view engine', 'ejs')

app.use(express.static('public'))

require('./database/index.js')

const globalMiddleWare = require('./middleware/global')
globalMiddleWare(app)

var bundleRoute = require('./routes')



app.get('/weathermap', (req, res) => {
	res.render('weather')
})

app.get('/globe', (req, res) => {
	res.render('globe')
})

app.get('/crossfilter', (req, res) => {
	res.render('crossfilter')
})

app.use('/', bundleRoute)


var port = process.env.PORT || 3001

app.listen(port, () => {
	console.log(`app is listening on port ${port}...`)
})
