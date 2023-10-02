require('dotenv').config()

//panggil module express
const express = require('express')

// express app
const app = express()

// react to request or route

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// middleware untuk menangani permintaan
app.get('/', (req, res) => {
    res.json({mssg: 'wellcome to my site'})
})


// listen request
app.listen(process.env.PORT,() => {
    console.log('listening on port', process.env.PORT)
})


