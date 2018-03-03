const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()

mongoose.connect(config.dataBase);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected...')
});

mongoose.Promise = global.Promise;

var Model = require('./models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// route

app.get('/', (req, res) => {
	res.send('<h1>This is the test<h1>')
})

app.post('/login', (req, res) => {
    Model.User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then((createUser) => {
            res.send(createUser)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.put('/login', (req, res) => {
    Model.User.findByIdAndUpdate(
        req.body.id,
        {email:req.body.email},
        {returnNewDocument:true}
    ).then(updateUser => {
        res.send(updateUser)
    }).catch(err => {
        console.log(err)
    })
})

app.post('/signup', (req, res) => {
    res.send('signup work')
})

let bills = [
    {
        date: '2017-12-03',
        fee: 24
    },
    {
        date: '2017-12-03',
        fee: 24
    },
    {
        date: '2017-12-03',
        fee: 24
    },    {
        date: '2017-12-03',
        fee: 24
    },
    {
        date: '2017-12-03',
        fee: 24
    },
    {
        date: '2017-12-03',
        fee: 24
    }
]

// 账单
app.get('/bills', (req, res) => {
    res.json({
        bills: bills
    })
})

const apiRoute = require('./api.js')

app.use('/api', apiRoute)

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})