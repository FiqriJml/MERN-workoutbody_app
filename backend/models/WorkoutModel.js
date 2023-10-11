const { default: mongoose } = require('mongoose')

const Schema = mongoose.Schema

// create schema for workout
const WorkoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }, 
}, {timestamps: true})

module.exports = mongoose.model('Workout', WorkoutSchema)