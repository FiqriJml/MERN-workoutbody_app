const express = require('express')

const router = express.Router()
const Workout = require('../models/WorkoutModel')
const {createWorkout, updateWorkout, getWorkouts, getWorkoutById, deleteWorkout} = require('../controllers/workoutController')

// GET all Workout
router.get('/', getWorkouts)
// GET one Workout
router.get('/:id', getWorkoutById)
// CREATE workout
router.post('/', createWorkout )
// UPDATE workout
router.patch('/:id', updateWorkout)
router.delete('/:id', deleteWorkout)


module.exports = router