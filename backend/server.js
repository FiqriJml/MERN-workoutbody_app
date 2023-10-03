require('dotenv').config()

//panggil module express
const express = require('express')

// express app
const app = express()
const workoutRouters = require('./routes/workouts')
const mongoose = require('mongoose')

// middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// middleware untuk menangani permintaan atau route
app.use('/api/workout', workoutRouters)

// connect to db
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    // listen request
    app.listen(process.env.PORT,() => {
        console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error)=> {
    console.error(error);
})


