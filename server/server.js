const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()

// mongoose.connect(`mongodb://localhost/{config.database}`);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('MongoDB connected...')
// });

const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// route

app.get('/', (req, res) => {
	res.send('<h1>This is the test<h1>')
})

app.post('/login', (req, res) => {
    res.send('login work')    
})

app.post('/signup', (req, res) => {
    res.send('signup work')
})

const apiRoute = require('./api.js')

app.use('/api', apiRoute)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})